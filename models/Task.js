const mongoose= require('mongoose');
const {Schema}= mongoose;

const taskSchema= new Schema({
    nombre:{type: String, required:true},
    tipo:{type:String, required:true},
    precio:{type:String, required:true},
    distribuidor:{type:String, required:true}
});

module.exports= mongoose.model('tareas', taskSchema);