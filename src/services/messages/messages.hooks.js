

const setMessage = require('../../hooks/set-message');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ setMessage() ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
