import { Router } from 'express';
import { generate } from 'shortid';
import Url from '../models/Url.js'; // Import the Url model

const router = Router();

// POST /api/url/shorten
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = 'http://localhost:5000';

  const urlCode = generate();
  try {
    let url = await Url.findOne({ longUrl }); // Use findOne method directly
    if (url) {
      res.json(url);
    } else {
      const shortUrl = `${baseUrl}/${urlCode}`;
      url = new Url({
        longUrl,
        shortUrl,
        urlCode,
      });
      await url.save();
      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// GET /:urlCode
router.get('/:urlCode', async (req, res) => {
  console.log('URL Code:', req.params.urlCode); // Log the URL code
  try {
      const url = await Url.findOne({ urlCode: req.params.urlCode }); // Use the Url model to query
      console.log('Short URL:', url); // Log the Url object
      if (!url) {
          return res.status(404).json({ msg: 'Short URL not found' });
      }
      res.redirect(url.longUrl);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

export default router;
