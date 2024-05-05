const http = require('http');
const server = http.createServer((req, res) => {
   
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
      break;
      const extname = String(path.extname(url)).toLowerCase();
        
            if (extname in mimeTypes) {
              staticFile(res, url, extname);
            } else {
              res.statusCode = 404;
              res.end("Not Found");
            }
            default:
                defaultRouteController(res, url);
      }
    }); 
server.listen(3000);