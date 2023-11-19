const express = require('express');
const router = express.Router();
const path = require('node:path');
const ofertasCotroller = require ('../controllers/ofertasController.js');

router.get('/ofertas', ofertasCotroller.index);

module.exports = router;