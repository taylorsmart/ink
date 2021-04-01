const models = require('../models');

const query = models.overview.queries;

module.exports = {
  getTattoo: (req, res) => {
    const id = req.params.id ;
    console.log(`Received Get request`);
    query.getTattoo(id, (err, results) => {
      if (err) {
        console.log(err);
        console.log(err)
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  getShop: (req, res) => {
    const id = req.params.id ;
    console.log(`Received Get request`);
    query.getShop(id, (err, results) => {
      if (err) {
        console.log(err);
        console.log(err)
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  getArtist: (req, res) => {
    const id = req.params.id ;
    console.log(`Received Get request`);
    query.getArtist(id, (err, results) => {
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