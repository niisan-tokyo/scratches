"use strict";

const koa = require('koa');
const app = koa();

app.use(require('./config/router')());

app.listen(3000);
