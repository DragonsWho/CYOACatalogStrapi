// /var/www/cyoa-cafe/backend/src/api/game/middlewares/set-cyoa-pages-order.js

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    if (ctx.request.files && ctx.request.files['files.CYOA_pages']) {
      const cyoaPagesOrder = ctx.request.body.data.CYOA_pages_order;
      if (cyoaPagesOrder) {
        const orderMap = JSON.parse(cyoaPagesOrder);
        const updatedFiles = ctx.request.files['files.CYOA_pages'].map((file, index) => ({
          ...file,
          order: orderMap[index].order,
        }));
        ctx.request.files['files.CYOA_pages'] = updatedFiles;
      }
    }
  };
};
