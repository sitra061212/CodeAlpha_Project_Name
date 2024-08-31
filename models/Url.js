import { Schema, model } from 'mongoose';

const UrlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model('Url', UrlSchema);
