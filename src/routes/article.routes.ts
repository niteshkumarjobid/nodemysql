import { Router } from 'express';
import {
  getAllArticles,
  getSingleArticle,
  previewArticle
} from '../controllers/article.controller';

const router = Router();

router.get('/', getAllArticles);
router.get('/:id', getSingleArticle);
router.get('/preview/:id', previewArticle);

export default router;