module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdhd6caen0hl21ljfui0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_gwpm'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'QgLNSBz173Q37w5aQk0YCONqopj3BR6r'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
