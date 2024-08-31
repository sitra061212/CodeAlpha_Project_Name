import { Router } from 'express';
import { generate } from 'shortid';
import Url from '../models/Url.js'; 

const router = Router();

// POST /api/url/shorten
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = 'http://localhost:7000/api/url';

  const urlCode = generate();
  try {
    let url = await Url.findOne({ longUrl }); 
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
  console.log('URL Code:', req.params.urlCode); 
  try {
      const url = await Url.findOne({ urlCode: req.params.urlCode }); 
      console.log('Short URL:', url.shortUrl); 
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
