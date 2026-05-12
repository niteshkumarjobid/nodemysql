import { Request, Response } from 'express';
import { getExternalPost } from '../services/external.service';

export const fetchExternalData = async (
  req: Request,
  res: Response
) => {
  const data = await getExternalPost();
  res.json(data);
};