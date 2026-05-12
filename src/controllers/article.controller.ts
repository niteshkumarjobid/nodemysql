import { Request, Response } from 'express';
import redis from '../config/redis';
import * as articleService from '../services/article.service';

export const getAllArticles = async (req: Request, res: Response) => {
  const cacheKey = 'articles';

  const cached = await redis.get(cacheKey);

  if (cached) {
    return res.json(JSON.parse(cached));
  }

  const articles = await articleService.getArticles();

  await redis.set(cacheKey, JSON.stringify(articles), 'EX', 60);

  res.json(articles);
};

export const getSingleArticle = async (req: Request, res: Response) => {
  const article = await articleService.getArticleById(Number(req.params.id));

  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }

  res.json(article);
};

export const previewArticle = async (req: Request, res: Response) => {
  const article = await articleService.getArticleById(Number(req.params.id));
  res.render('preview', { article });
};