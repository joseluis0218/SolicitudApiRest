let model = require('../models/solicitudModel');
let moment = require('moment');
module.exports = {

	show : function(req,res){
		model.find({},function(err,result){
			if (err){
				console.log(err);
				res.status(500).send("ERROR");
			} else {
				console.log("PASS");
				res.json(result).status(200);
			}
		})
	},

	create : function(req,res){
		let obj = new model;
		console.log(req.body);
		let fecha = req.body.fecha;
obj._id = req.body._id;
		obj.solicitante = req.body.solicitante;
		obj.descripcion = req.body.descripcion;
		obj.tipo = req.body.tipo;
		obj.fecha = moment(fecha).format("DD/MM/YYYY");
		obj.notificacion = req.body.notificacion;

		obj.save(function(err, newData){
			if (err){
				console.log(err);
				res.status(500).send("We have a problem :( !")
			} else {
				res.json(newData).status(200);
			} 
		})
	},

	detail : function(req,res){
		var id = req.params.id;
		model.findOne({_id : id}, function(err,data){
			if(err){
				console.log(err);
				res.status(500).send("Internal Server Error")
			}else{
				res.json(data).status(200)
			}
		})
	},

	update : function(req,res){
		var id = req.params.id;
		var fecha = req.body.fecha;
		let datos = {
			solicitante : req.body.solicitante,
			descripcion : req.body.descripcion,
			tipo : req.body.tipo,
			fecha : moment(fecha).format("DD/MM/YYYY"),
			notificacion : req.body.notificacion
		};

		model.updateOne({_id : id},datos, function(err,newData){
			if(err){
				console.log(err);
				res.status(500).send("Error")
			}else{
				res.json(newData).status(200);
			}
		});
	},

	delete : function(req,res){
		var id = req.params.id;
		model.deleteOne({_id : id}, function(err){
			if(err){
				console.log(err);
				res.status(500).send("Error deleting")

			}else{
				console.log("Deleted");
				res.json("Eliminado correctamente").status(200)
			}
		})
	}

}
