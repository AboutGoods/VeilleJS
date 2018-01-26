const article = require('./article/article.service.js');
module.exports = function (app) {
  app.configure(article);
};
