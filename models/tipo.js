const { Schema, model } = require('mongoose');

const TipoSchema = Schema({
    tipo: {
        type: String,
        required: [true , 'El rol es obligatorio']
    },
});


module.exports = model('Tipo', TipoSchema);