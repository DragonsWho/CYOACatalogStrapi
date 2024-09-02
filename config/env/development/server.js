module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  app: {
    keys: [env('APP_KEY_A'), env('APP_KEY_B')],
  },
  logger: {
    level: 'debug',
    exposeInContext: true,
    requests: true,
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  cors: {
    enabled: true,
    origin: ['http://localhost:1337', 'http://localhost:5173', 'http://localhost:3000'],
    headers: ['*'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
    credentials: true,
  },
  frontend_url: env('FRONTEND_URL', 'http://localhost:5173', 'http://localhost:3000'),
});