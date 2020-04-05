const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'todo_db',
        user: 'postgres',
        password: 'password'
    }
});

module.exports = knex;