'use strict';

/**
 *  test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test.test', ({ strapi }) =>  ({
  async find(ctx) {
    console.log('TEST, CONTROLLER RAN')
    // some logic here
    const { data, meta } = await super.find(ctx);
    // some more logic

    return { data, meta };
  }
}));
