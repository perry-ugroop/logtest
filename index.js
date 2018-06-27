import express from 'express';
import bodyParser from 'body-parser';
import { getPage, createLogger, writeToLog } from './utils';
import index from './views/index';
import config from './config';

const app = express();

const log = createLogger(config.log);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const page = getPage(index, req.query.posted);

  res.set('Content-Type', 'text/html; charset="utf-8"');
  res.send(page);
});

app.post('/postit', (req, res) => {
  const { msg, type } = req.body;
  writeToLog(log, type, msg);
  
  res.set('Content-Type', 'text/html; charset="utf-8"');
  res.redirect('/?posted=yes');
});

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}`));

