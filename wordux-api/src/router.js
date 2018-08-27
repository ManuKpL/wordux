import express from 'express';
import LettersResource from './letters/letters.resource';
import WordsResource from './words/words.resource';

export default (() => {
  const apiRouter = express.Router();

  const lettersResource = new LettersResource();
  const wordsResource = new WordsResource();

  apiRouter.route(lettersResource.route)
    .get(lettersResource.getLetters());

  apiRouter.route(`${wordsResource.route}/:word`)
    .get(wordsResource.getWordValidity());

  return apiRouter;
})();
