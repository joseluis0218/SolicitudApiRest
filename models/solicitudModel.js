let mongoose = require('mongoose');

Schema = mongoose.Schema;

let dataSchema = new Schema({
_id : {type: String},
	solicitante : {type: String, require : true},
	descripcion : {type: String, require: true},
	fecha : {type: String, require : true},
	tipo : {type: String, require : true},
	notificacion : {type : Boolean, require : true}
});

let model = mongoose.model('solicitud', dataSchema, 'solicitud');

module.exports = model;
