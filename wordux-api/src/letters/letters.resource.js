import LettersService from './letters.service';

const getLetters = (() => {
  const service = new LettersService();

  return () => [
    '/api/letters',
    (req, res) => {
      res.json({
        status: 'OK',
        lettersList: service.lettersList,
      });
    },
  ];
})();

export default getLetters;
