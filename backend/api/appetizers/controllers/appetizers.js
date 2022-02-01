"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      entity = await strapi.services.appetizers.create(data, { files });
    } else {
      ctx.request.body.user = ctx.state.user.id;
      entity = await strapi.services.appetizers.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.events });
  },

  //   // Delete appetizer
  //   async delete(ctx) {
  //     const { id } = ctx.params;

  //     const [appetizers] = await strapi.services.appetizers.find({
  //       id: ctx.params.id,
  //     });

  //     if (!appetizers) {
  //       return ctx.unauthorized(`You can't update this entry`);
  //     }

  //     const entity = await strapi.services.appetizers.delete({ id });
  //     return sanitizeEntity(entity, { model: strapi.models.events });
  //   },
};
