var express = require('express');
var router = express.Router();
var pds_controller = require('../controllers/productController');


router.get('/', pds_controller.prod_list) ;
router.get('/:id', pds_controller.prod_id) ;
router.get('/instock/:qte', pds_controller.prod_stock) ;
router.get('/:id/:qte', pds_controller.prod_id_qte) ;



module.exports = router;

