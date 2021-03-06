const render = require('koa-swig');
const path = require('path');

module.exports = function(app) {
  app.context.render = render({
    root: path.join(__dirname, '/../views'),
    autoescape: true,
    ext: 'html',
    cache: false
  });
};
