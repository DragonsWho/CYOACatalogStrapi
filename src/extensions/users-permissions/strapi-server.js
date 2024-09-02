const axios = require('axios');

module.exports = (plugin) => {
  plugin.controllers.auth.callback = async (ctx) => {
    const provider = ctx.params.provider || 'local';
    console.log('Callback initiated for provider:', provider);

    if (provider === 'discord') {
      try {
        const accessToken = ctx.query.access_token;
        if (!accessToken) {
          throw new Error('No access token provided');
        }

        // Получение информации о пользователе из Discord API
        const userResponse = await axios.get('https://discord.com/api/users/@me', {
          headers: { Authorization: `Bearer ${accessToken}` }
        });

        const { id: discordId, username, email, avatar } = userResponse.data;

        // Поиск или создание пользователя
        const userService = strapi.plugin('users-permissions').service('user');
        let user = await strapi.db.query('plugin::users-permissions.user').findOne({
          where: { discordId: discordId.toString() }
        });

        if (!user) {
          const role = await strapi.db.query('plugin::users-permissions.role').findOne({
            where: { type: 'authenticated' }
          });

          user = await userService.add({
            username,
            email,
            discordId: discordId.toString(),
            provider: 'discord',
            confirmed: true,
            role: role.id,
          });
        }

        // Генерация JWT токена
        const jwt = strapi.plugin('users-permissions').service('jwt').issue({
          id: user.id,
        });

        console.log('User authenticated:', user);
        console.log('JWT issued for user');

        // Перенаправление на фронтенд с JWT токеном
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
        return ctx.redirect(`${frontendUrl}/auth-callback?token=${jwt}`);
      } catch (error) {
        console.error('Error during Discord authentication:', error);
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
        return ctx.redirect(`${frontendUrl}/auth-error?error=${encodeURIComponent(error.message)}`);
      }
    } else if (provider === 'local') {
      try {
        const { identifier, password } = ctx.request.body;
        
        if (!identifier || !password) {
          return ctx.badRequest('Please provide both identifier and password');
        }

        const user = await strapi.query('plugin::users-permissions.user').findOne({
          where: {
            $or: [
              { email: identifier.toLowerCase() },
              { username: identifier }
            ]
          },
          populate: ['role']
        });

        if (!user) {
          return ctx.badRequest('Invalid identifier or password');
        }

        if (!user.password) {
          return ctx.badRequest('Invalid identifier or password');
        }

        const validPassword = await strapi.plugin('users-permissions').service('user').validatePassword(
          password,
          user.password
        );

        if (!validPassword) {
          return ctx.badRequest('Invalid identifier or password');
        }

        const jwt = strapi.plugin('users-permissions').service('jwt').issue({
          id: user.id,
        });

        // Создаем объект пользователя без чувствительных данных
        const sanitizedUser = {
          id: user.id,
          username: user.username,
          email: user.email,
          provider: user.provider,
          confirmed: user.confirmed,
          blocked: user.blocked,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          role: {
            id: user.role.id,
            name: user.role.name,
            description: user.role.description,
            type: user.role.type,
          }
        };

        ctx.send({
          jwt,
          user: sanitizedUser,
        });
      } catch (error) {
        console.error('Error during local authentication:', error);
        ctx.badRequest('An error occurred during authentication');
      }
    }  else {
      // Обработка других провайдеров (оставляем без изменений)
      try {
        const { user, error } = await strapi.plugin('users-permissions').services.providers.connect(
          provider,
          ctx.query
        );

        if (error) {
          throw error;
        }

        const jwt = strapi.plugin('users-permissions').service('jwt').issue({
          id: user.id,
        });

        return ctx.redirect(`${strapi.config.server.url}/auth-callback?token=${jwt}`);
      } catch (error) {
        console.error('Unexpected error during callback:', error);
        const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
        return ctx.redirect(`${frontendUrl}/auth-error?error=unexpected_error`);
      }
    }
  };

  return plugin;
};