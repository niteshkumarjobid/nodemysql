import { Router } from 'express';
import { fetchExternalData } from '../controllers/external.controller';

const router = Router();

router.get('/', fetchExternalData);

export default router;