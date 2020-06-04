

module.exports = {
  client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '132465',
        database : 'NLW1'
      },
      migrations: {
        directory: "./src/database/migrations"
      },
      seeds: {
        directory: "./src/database/seeds"
      }
};



