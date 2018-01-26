// Initializes the `Article` service on path `/article`
const createService = require('feathers-rethinkdb');
const hooks = require('./article.hooks');

module.exports = function (app) {
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'article',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/article', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('article');

  service.hooks(hooks);
};
