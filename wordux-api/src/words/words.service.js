import https from 'https';

export default class WordsService {
  validateWord(word) {
    return new Promise((resolve, reject) => {
      const url = `https://www.larousse.fr/dictionnaires/francais-anglais/${word}`;
      const getCallBack = ({ statusCode }) => {
        const wordIsValid = statusCode === 301;
        if (wordIsValid) {
          resolve();
        } else {
          reject();
        }
      };

      https.get(url, getCallBack);
    });
  }
}
