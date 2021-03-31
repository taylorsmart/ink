const { Pool, Client } = require('pg')

//Connect to db
const client = new Client({
  host: 'localhost',
  user: 'super',
  password: '',
  database: 'ink',
})

client.connect()

module.exports = client;
