import express from 'express';
import LettersService from './letters.service';

export default class LettersResource {
  constructor() {
    this.route = '/letters';
    this.service = new LettersService();
  }

  _getLetters() {
    return (req, res) => {
      const { lettersList } = this.service;
      res.json({
        status: 'OK',
        lettersList,
      });
    };
  }

  router() {
    const router = express.Router();

    router.route('/')
      .get(this._getLetters());

    return router;
  }
}
