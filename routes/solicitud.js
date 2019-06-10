var express = require('express');

var router = express.Router();

var controller = require('../controllers/solicitudController');

router.get('/listar', function(req,res){
	controller.show(req,res);
});

router.post('/crear', function(req,res){
	controller.create(req,res);
});

router.get('/detalle/:id', function(req,res){
	controller.detail(req,res);
});

router.put('/actualizar/:id', function(req,res){
	controller.update(req,res);
});

router.delete('/eliminar/:id', function(req,res){
	controller.delete(req,res);
});


module.exports = router;