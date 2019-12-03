module.exports.noticias = function(application, req,res){
    var connection = application.config.dbConnection();
    var noticiasModel =new  application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error,result){
        //res.send(result);
        res.render("noticias/noticias", {noticias : result});
    });
}


module.exports.noticia = function(application,req,res){
    var connection = application.config.dbConnection();
    var noticiasModel =new  application.app.models.NoticiasDAO(connection);
    var noticia = req.query;
    //console.log(req);
    console.log(noticia);
    noticiasModel.getNoticia(noticia, function (erro, result) {
        //res.send(result);
        res.render("noticias/noticia", {noticia : result[0]});
    });
}