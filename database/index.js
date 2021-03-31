const { Pool, Client } = require('pg')

//Connect to db
const client = new Client({
  host: 'localhost',
  user: 'ubuntu',
  password: '',
  database: 'ink',
})

client.connect()

module.exports = db;