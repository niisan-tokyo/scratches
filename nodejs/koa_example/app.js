"use strict";

const koa = require('koa');
const app = koa();

require('./libs/render')(app);

app.use(require('koa-static-server')({rootDir: 'assets', rootPath: '/assets'}));

app.use(function *(next){
  console.log('douda');
  yield next;
});

app.use(require('./config/router')(app));

app.listen(3000);
