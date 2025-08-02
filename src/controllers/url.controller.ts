import { Request, Response } from 'express';
import URL from '../models/url.model';
import { generateShortCode } from '../utils/shortCodeGenerator';
import validUrl from 'valid-url';

const BASE_URL = 'http://localhost:3000';

export const createShortUrl = async (req: Request, res: Response) => {
  const { longUrl } = req.body;

  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json({ message: 'Invalid URL' });
  }

  try {
    let shortCode = generateShortCode();
    let exists = await URL.findOne({ where: { shortCode } });

    // Ensure unique shortCode
    while (exists) {
      shortCode = generateShortCode();
      exists = await URL.findOne({ where: { shortCode } });
    }

    const newUrl = await URL.create({ longUrl, shortCode });

    return res.status(201).json({
      shortUrl: `${BASE_URL}/${newUrl.shortCode}`,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong', error });
  }
};

export const redirectToLongUrl = async (req: Request, res: Response) => {
  const { shortCode } = req.params;

  try {
    const url = await URL.findOne({ where: { shortCode } });

    if (url) {
      return res.redirect(302, url.longUrl);
    } else {
      return res.status(404).json({ message: 'Short URL not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};
