'use strict';

module.exports = {
  async updateTags(ctx) {
    const { id } = ctx.params;
    const { tags } = ctx.request.body;

    const entity = await strapi.services.game.update({ id }, { selectedTags: tags });

    return sanitizeEntity(entity, { model: strapi.models.game });
  },
};