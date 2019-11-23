var express = require('express');
var router = express.Router();
var SearchManager = require('../Controllers/SearchManager');

router.get('/', SearchManager.getBuscadores);

router.get('/:id', SearchManager.getBuscador);

router.post('/', SearchManager.create);

router.put('/:id', SearchManager.update);

router.delete('/:id', SearchManager.delete);

module.exports = router;