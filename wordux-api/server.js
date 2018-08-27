import express from 'express';
import apiRouter from './src/router';

(() => {
  const app = express();
  app.use('/api', apiRouter);
  app.listen(3000, () => {
    console.info(`
      \\\\\\         ///
       \\\\\\ //\\\\\\ ///
        \\\\//  \\\\///
    `);
    console.info('Api listening on port 3000');
  });
})();
