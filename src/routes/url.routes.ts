import { Router } from 'express';
import { createShortUrl, redirectToLongUrl } from '../controllers/url.controller';

const router = Router();

router.post('/api/shorten', createShortUrl);
router.get('/:shortCode', redirectToLongUrl);

export default router;
