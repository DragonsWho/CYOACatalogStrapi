module.exports = ({ env }) => ({
  comments: {
    enabled: true,
    config: {
      enabledCollections: ['api::game.game'],
      badWords: false,
      moderatorRoles: ["Authenticated"],
    },
  },
  'users-permissions': {
    config: {
      providers: {
        discord: {
          enabled: true,
          icon: 'discord',
          key: env('DISCORD_CLIENT_ID'),
          secret: env('DISCORD_CLIENT_SECRET'),
          callback: '/api/auth/discord/callback',
          scope: ['identify', 'email'],
        },
      },
    },
  },
email: {
  config: {
    provider: '@strapi/provider-email-nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', '127.0.0.1'),
      port: env('SMTP_PORT', 1025),
      ignoreTLS: true,
      secure: false,
      auth: {
        user: null,
        pass: null,
      },
    },
    settings: {
      defaultFrom: 'noreply@example.com',
      defaultReplyTo: 'noreply@example.com',
    },
  },
},
});