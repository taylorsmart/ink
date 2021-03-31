const axios = require('axios');
const config = require('../env/config.js');
const db = require('../../database/index.js');

const queries = {
  getTattoo: (id,callback) => {
    console.log(`Executing tatto fetch for id ${id}`)
    client.query(
          `SELECT \
            * \
            from tattoo_info \
            where pt.id =$1;`
          ,[id] , (err, res) => {
        if (err) {
          callback(err,null);
        } else {
          callback(null,res);
        }
      })
  }
}

module.exports.queries = queries;
