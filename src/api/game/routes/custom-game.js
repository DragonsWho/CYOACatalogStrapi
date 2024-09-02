module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/games/:id/tags',
      handler: 'custom-game.updateTags',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};