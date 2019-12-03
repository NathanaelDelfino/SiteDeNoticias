var mysql = require('mysql');

var connMySQL= function(){
    console.log('Realizada conexao');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'joel0307',
        database: 'portal_noticias'
    });
}


module.exports = function(){
    console.log('Banco Carregado');
    return connMySQL;
}
