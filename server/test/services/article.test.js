const assert = require('assert');
const app = require('../../src/app');

describe('\'Article\' service', () => {
  it('registered the service', () => {
    const service = app.service('article');

    assert.ok(service, 'Registered the service');
  });
});
