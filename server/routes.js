const router = require('express').Router();
const controller = require('./controllers');


// Connect controller methods to their corresponding routes
router.get('/tattoo/:id', controller.overview.getTattoo);


module.exports = router;
