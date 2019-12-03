var http = require('http');

var server = http.createServer(function(req,resp){
   
    var categoria = req.url;
   

    if(categoria == '/tecnologia'){
        resp.end(`<html>
        <body>
            <h1>Noticias sobre Tecnologia</h1>
        </body>
      </html>`);
    } else if(categoria == '/moda'){
        resp.end(`<html>
        <body>
            <h1>Noticias sobre moda</h1>
        </body>
      </html>`);
    } else if(categoria == '/beleza'){
        resp.end(`<html>
        <body>
            <h1>Noticias sobre Beleza</h1>
        </body>
      </html>`);
    } else{
        resp.end(`<html>
        <body>
            <h1>Portal de Noticias</h1>
        </body>
      </html>`);
    }

});

server.listen(3000);