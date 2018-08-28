import express from 'express';
import { resolve } from 'path';
import apiRouter from './src/router';

(() => {
  const app = express();

  const appDistPath = resolve(__dirname, '..', 'wordux-app', 'dist');
  app.use(express.static(appDistPath));

  app.use('/api', apiRouter);

  app.listen(process.env.PORT || 3000, () => {
    console.info(`
      \\\\\\         ///
       \\\\\\ //\\\\\\ ///
        \\\\//  \\\\///
    `);
    console.info('Api listening on port 3000');
  });
})();
