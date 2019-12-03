var app = require('./config/server');

/* var home = require('./app/routes/home')(app);
var routesNoticias = require('./app/routes/noticias')(app); 
var tecnologia = require('./app/routes/tecnologia')(app);
var noticiasInlcuir = require('./app/routes/formulario_inclusao_noticias')(app); */


app.listen(3000, function(){
    console.log('Servidor ON');
});
