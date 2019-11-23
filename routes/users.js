var express = require('express');
var router = express.Router();


const TaskController = require('../controllers/taskcontrollers');

router.post('/',TaskController.store);
router.get('/Bestiario',TaskController.getTareas);
router.get('/Bestiario/:id',TaskController.buscar);
router.delete('/Bestiario/:id',TaskController.delete);
router.put('/Bestiario/:id',TaskController.update);

module.exports = router;
