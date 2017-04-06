module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/wine_development',
      seeds: {
        directory: './seeds/dev'
      }
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
