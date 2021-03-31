const models = require('../models');

const query = models.overview.queries;

module.exports = {
  getTattoo: (req, res) => {
    const data = [offset,page] ;
    console.log(`Received Get request`);
    query.getTattoo(data, (err, results) => {
      if (err) {
        console.log(err);
        console.log(err)
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  }
}