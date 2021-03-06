const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commande.controller');


router.put('/:refArticle', commandeController.updateStockArticle);
router.post('/', commandeController.insertCommande);

module.exports = router;