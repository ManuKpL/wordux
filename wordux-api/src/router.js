import express from 'express';
import LettersResource from './letters/letters.resource';
import WordsResource from './words/words.resource';

export default (() => {
  const apiRouter = express.Router();

  const lettersResource = new LettersResource();
  const wordsResource = new WordsResource();

  apiRouter
    .use(lettersResource.route, lettersResource.router())
    .use(wordsResource.route, wordsResource.router());

  return apiRouter;
})();
