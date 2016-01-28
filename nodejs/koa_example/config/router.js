"use strict";

module.exports = function(){
  const router = require('koa-router')();

  router
    .get('/', function* (){
      this.body = 'hello world';
    })
    .get('/evening', function* (){
      this.body = 'good evening';
    });

  return router.routes();
}
