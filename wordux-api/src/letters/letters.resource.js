import LettersService from './letters.service';

export default class LettersResource {
  constructor() {
    this.route = '/letters';
    this.service = new LettersService();
  }

  getLetters() {
    return (req, res) => {
      const { lettersList } = this.service;
      res.json({
        status: 'OK',
        lettersList,
      });
    };
  }
}
