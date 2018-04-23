const { authenticate } = require('@feathersjs/authentication').hooks;

const setMessage = require('../../hooks/set-message');

const getUser = require('../../hooks/get-user');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ setMessage() ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ getUser() ],
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
