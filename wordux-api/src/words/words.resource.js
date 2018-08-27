import WordsService from './words.service';

export default class WordsResource {
  constructor() {
    this.route = '/words';
    this.service = new WordsService();
  }

  getWordValidity() {
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
}
