function NoticiasDAO(connection) {
    this._connection = connection;

}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM Noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function (noticia, callback) {
    this._connection.query('SELECT * FROM Noticias WHERE ?', noticia, callback);
}

NoticiasDAO.prototype.get5ultimasNoticias = function (callback) {
    this._connection.query('SELECT * FROM Noticias ORDER BY data_criacao DESC LIMIT 5', callback);
}


NoticiasDAO.prototype.postNoticia = function (noticia, callback) {
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

module.exports = function () {
    return NoticiasDAO;
}


