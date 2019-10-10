var express = require('express');
var router = express.Router();
var os_controller = require('../controllers/osController');


router.get('/', os_controller.os_exemple) ;
router.get('/cpus', os_controller.os_list) ;
router.get('/cpus/:id', os_controller.os_get) ;


module.exports = router;
