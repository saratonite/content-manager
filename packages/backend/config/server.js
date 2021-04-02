module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("URL", "http://localhost/api"),
  admin: {
    url: `${env("URL", "http://localhost/api")}/admin`,
    auth: {
      secret: env("ADMIN_JWT_SECRET", "d5d37b1b50c3fac999691a39c7dd8d49"),
    },
  },
});
