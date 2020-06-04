import knex from 'knex';


var connection = knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '132465',
      database : 'nlw1'
    }
    
  });

  export default connection;