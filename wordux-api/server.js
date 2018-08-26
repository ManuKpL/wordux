import express from 'express';
import getLetters from './src/letters/letters.resource';

const app = express();

app.get('/', (req, res) => {
  res.json({
    page: 'home',
    data: 'Hello World!',
  });
});

app.get(...getLetters());

app.listen(3000, () => {
  console.info(`
    \\\\\\         ///
     \\\\\\ //\\\\\\ ///
      \\\\//  \\\\///
  `);
  console.info('Api listening on port 3000');
});
