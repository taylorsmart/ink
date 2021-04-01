const router = require('express').Router();
const controller = require('./controllers');


// Connect controller methods to their corresponding routes
router.get('/tattoo/:id', controller.overview.getTattoo);
router.get('/shop/:id', controller.overview.getShop);
router.get('/artist/:id', controller.overview.getArtist);


module.exports = router;
