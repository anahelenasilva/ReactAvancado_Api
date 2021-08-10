module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('HEROKU_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0d0544e9bb8bb2ac5826e18b8907fcb5'),
    },
  },
});
