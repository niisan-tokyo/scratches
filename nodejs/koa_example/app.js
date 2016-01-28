"use strict";

const koa = require('koa');
const app = koa();

require('./libs/render')(app);

app.use(require('./config/router')(app));

app.listen(3000);
