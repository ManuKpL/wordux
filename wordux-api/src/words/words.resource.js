import express from 'express';
import WordsService from './words.service';

export default class WordsResource {
  constructor() {
    this.route = '/words';
    this.service = new WordsService();
  }

  _getWordValidity() {
    return (req, res) => {
      const { word } = req.params;

      this.service.validateWord(word)
        .then(() => {
          res.json({
            status: 'OK',
            validity: true,
          });
        })
        .catch(() => {
          res.json({
            status: 'OK',
            validity: false,
          });
        });
    };
  }

  router() {
    const router = express.Router();

    router.route('/:word')
      .get(this._getWordValidity());

    return router;
  }
}
