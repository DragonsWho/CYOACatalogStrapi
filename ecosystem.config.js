
module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/var/www/cyoa-cafe/backend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
      user: 'www-data'
    },
  ],
};
