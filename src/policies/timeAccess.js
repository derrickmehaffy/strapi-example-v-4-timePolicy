'use strict';
const utils = require('@strapi/utils');
const { ValidationError } = utils.errors;

/**
 * `timeAccess` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
  // Add your own logic here.
  if (policyContext.state.user) {
    let startTime = "6:00"
    let endTime = "8:30"
    const currentTime = new Date().getUTCHours() + ':' + new Date().getUTCMinutes()

    if (currentTime >= startTime && currentTime <= endTime ) {
      return true
    } else {
      throw new ValidationError('You are outside the allowed time');
    }
  }

  return false;
};
