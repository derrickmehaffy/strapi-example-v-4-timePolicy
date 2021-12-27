'use strict';
const utils = require('@strapi/utils');
const { ApplicationError } = utils.errors;

/**
 * `timeAccess` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
  // Apply only if the user is logged in
  if (policyContext.state.user) {

    // Construct time vars
    let startTime = "6:00"
    let endTime = "15:03"
    const currentDate = new Date()

    // Normalize the start time to a date
    let startDate = new Date(currentDate.getTime());
    startDate.setHours(startTime.split(":")[0]);
    startDate.setMinutes(startTime.split(":")[1]);

    // Normalize the end time to a date
    let endDate = new Date(currentDate.getTime());
    endDate.setHours(endTime.split(":")[0]);
    endDate.setMinutes(endTime.split(":")[1]);

    // Run comparison, if outside throw error
    if (currentDate >= startDate && currentDate <= endDate ) {
      return true
    } else {
      throw new ApplicationError(`Requests are only accepted between ${startTime} and ${endTime}. It\'s currently ${currentDate}`);
    }
  }

  return false;
};
