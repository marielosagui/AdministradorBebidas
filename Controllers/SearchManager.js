var BuscadorWebModel = require('../Models/BuscadorBebida');
const SearchManager = {};

SearchManager.create = (req, res, next) =>{
    var buscador = new BuscadorBebidaModel();
    buscador.nombre = req.body.nombre;
    buscador.tipo= re.body.tipo;
    buscador.precio = req.body.precio;
    buscador.company = req.body.company;

    buscador.save((error, buscador)=>{
        if(error) return res.status(500).json({status:500, success: false, message:"Error interno del servidor"});

        if(buscador){
            return res.status(200).json({status:200, success: true, message:"Buscador guardado correctamente en el sistema", buscador});
        }else{
            return res.status(404).json({status:404, success: false, message:"Error al guardar el nuevo buscador", buscador});
        }
    });
};

SearchManager.update = (req, res, next) =>{
    var id = req.params.id;
    BuscadorWebModel.findByIdAndUpdate(id, req.body, {new:true}, (error, buscador)=>{
        if(error) return res.status(500).json({status:500, success: false, message:"Error interno del servidor"});

        if(buscador){
            return res.status(200).json({status:200, success: true, message:"Buscador actualizado con exito en el sistema", buscador});
        }else{
            return res.status(404).json({status:404, success: false, message:"Error al actualizar buscador"});
        }
    });
};

SearchManager.delete = (req, res, next) =>{
    var id = req.params.id;
    BuscadorWebModel.findByIdAndDelete(id, (error, buscador)=>{
        if(error) return res.status(500).json({status:500, success: false, message:"Error interno del servidor"});

        if(buscador){
            return res.status(200).json({status:200, success: true, message:"Buscador eliminado con exito del sistema", buscador});
        }else{
            return res.status(404).json({status:404, success: false, message:"Error al eliminar buscador"});
        }
    });
};

SearchManager.getBuscador = (req, res, next) =>{
    BuscadorWebModel.findById(req.params.id, (error, buscador)=>{
        if(error) return res.status(500).json({status:500, success: false, message:"Error interno del servidor"});

        if(buscador){
            return res.status(200).json({status:200, success: true, message:"Buscador web encontrado", buscador});
        }else{
            return res.status(404).json({status:404, success: false, message:"No se encontro buscador"});
        }
    });
};

SearchManager.getBuscadores = (req, res, next) =>{
    BuscadorWebModel.find({}, (error, buscadores)=>{
        if(error) return res.status(500).json({status:500, success: false, message:"Error interno del servidor"});

        if(buscadores){
            return res.status(200).json({status:200, success: true, message:"Peticion de buscadores realizada con exito", buscadores});
        }else{
            return res.status(404).json({status:404, success: false, message:"No se encontraron buscadores"});
        }
    });
};

module.exports = SearchManager;
