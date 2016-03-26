"use strict";

module.exports = function(){
  const router = require('koa-router')();

  router
    .get('/', function* (){
      yield this.render('top/index')
    })
    .get('/board', function* (){
      yield this.render('board/index');
    });

  return router.routes();
}
