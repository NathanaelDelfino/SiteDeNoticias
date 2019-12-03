const { check } = require('express-validator');

module.exports = function (application) {

    application.get('/formulario_inclusao_noticia', function (req, response) {
       application.app.controllers.admin.formulario_inclusao_noticia(application,req,response); 
    //    response.render("admin/form_add_noticia", {
    //     validacao: {},
    //     noticia: {}
    // });
    });

    application.post('/noticias/salvar',
        [
            check('titulo', 'O campo titulo é obrigatório').not().isEmpty(),
            check('resumo', 'O campo resumo é obrigatório').not().isEmpty(),
            check('resumo', 'O campo resumo deve conter entre 10 e 100 caracteres').isLength({min: 10, max: 100}),
            check('autor', 'O campo autor é obrigatório').not().isEmpty(),
            check('data_noticia', 'Data é obrigatório').isISO8601(),
            check('noticia', 'O campo noticia deve ser preenchido').not().isEmpty()

        ],
        function (req, res) {
            application.app.controllers.admin.noticias_salvar(application,req,res); 
        }
    )
}