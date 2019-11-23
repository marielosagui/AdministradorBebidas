const Task = require('../models/Task');
const taskController = {};

taskController.store= function(req,res,next){
    var task= new Task({
        nombre:req.body.nombre,
        tipo:req.body.tipo,
        precio: req.body.precio,
        distribuidor: req.body.distribuidor
    });

    task.save(function(err){
        if(err)
            return res.status(400).send({"error":err});
        return res.status(200).json({"message": "guardado con exito"});

    })
};

taskController.getTareas=function(req,res,next){
    Task.find({},function(err, tareas){
        if(err)
            return res.status(400);
        return res.status(200).json({tareas});

    })
};

taskController.delete= function(req,res,next){
    let {id}=req.params;

    Task.deleteOne({_id:id}, function(err){
        if(err)
            return res.status(400);
        return res.status(200).json({"message": "eliminado con exito"});

    })
};

taskController.buscar=function(req,res,next){
    let {id}=req.params;

    Task.findById(id, function(err,tarea){
        if(err)
            return res.status(400);
        return res.status(200).json(tarea);

    })
};

taskController.update= async function(req,res,next){
    let {id}=req.params;
    await Task.update({_id:id}, req.body);
    return res.status(200);
};

module.exports= taskController;