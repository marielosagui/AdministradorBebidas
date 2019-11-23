var mongoose = require('mongoose');

var buscadorbebida = mongoose.Schema({
    nombre: 'String',
    tipo:'String',
    precio: 'decimal', 
    company: 'String'
});

module.exports = mongoose.model("bebidas", buscadorbebida);
