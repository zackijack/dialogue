// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const errors = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data } = context;

    if (!data.text) {
      throw new errors.BadRequest('A message mush have a text');
    }

    const { user } = context.params;
    const { text } = data;

    context.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime(),
    };

    return context;
  };
};
