"use strict";

const koa = require('koa');
const app = koa();

require('./lib/render')(app);

app.use(require('koa-static-server')({rootDir: 'assets', rootPath: '/assets'}));

app.use(require('./config/router')(app));

//サーバスタート
app.listen(8080);
