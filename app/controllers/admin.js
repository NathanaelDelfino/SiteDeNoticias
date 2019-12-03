const {
    validationResult
} = require('express-validator');


module.exports.formulario_inclusao_noticia = function (application, request, response) {
    response.render("admin/form_add_noticia", {
        validacao: {},
        noticia: {}
    });
}

module.exports.noticias_salvar = function (application, request, response) {
    var erros = validationResult(request);
    var noticia = request.body;
    if (erros.array().length > 0) {
        response.render("admin/form_add_noticia", {
            validacao: erros.array(),
            noticia: noticia
        });
        return;
    } else {
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);
        noticiasModel.postNoticia(noticia, function (erros, result) {
            response.redirect('/noticias')
        });
    }

}