const axios = require('axios');
const config = require('../env/config.js');
const client = require('../../database/index.js');

const queries = {
  getTattoo: (id, callback) => {
    console.log(`Executing tattoo fetch for id ${id}`)
    client.query(
        `SELECT \
          * \
          from tattoo_info as ti\
          where ti.id =$1;`
        ,[id] , (err, res) => {
      if (err) {
        callback(err,null);
      } else {
        callback(null,res);
      }
    })
  },
  getShop: (id, callback) => {
    console.log(`Executing Shop fetch for id ${id}`)
    client.query(
        `SELECT \
          * \
          from shop_meta as sm\
          where sm.id =$1;`
        ,[id] , (err, res) => {
      if (err) {
        callback(err,null);
      } else {
        callback(null,res);
      }
    })
  },
  getArtist: (id, callback) => {
    console.log(`Executing Artist fetch for id ${id}`)
    client.query(
        `SELECT \
          * \
          from artist_meta as am\
          where am.id =$1;`
        ,[id] , (err, res) => {
      if (err) {
        callback(err,null);
      } else {
        callback(null,res);
      }
    })
  }
}

// queries.getTattoo(1, (err, results) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);
//   }
// });;

module.exports.queries = queries;
// /Users/taylorsmart/engineering/mvp/ink/database/index.js