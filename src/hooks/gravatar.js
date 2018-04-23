// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const crypto = require('crypto');

const gravatarEndpoint = 'https://s.gravatar.com/avatar';
const sizeQuery = 's=60';

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { email } = context.data;

    const emailHash = crypto.createHash('md5').update(email).digest('hex');

    context.data.avatar = `${gravatarEndpoint}/${emailHash}?${sizeQuery}`;

    return context;
  };
};
