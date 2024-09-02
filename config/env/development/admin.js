module.exports = ({ env }) => ({
    auth: {
      secret: 'GXpV+8y82F0NmRV6hLyXyA==',
    },
    apiToken: {
      salt:'GXpV+8y82F0NmRV6hLyXyA==',
    },
    transfer: {
      token: {
        salt: 'GXpV+8y82F0NmRV6hLyXyA==',
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  });
  