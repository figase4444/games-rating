module.exports = gameRouteController;
const server = http.createServer((req, res) => {
    const url = req.url;
  switch (url) {
      case "/":
              mainRouteController(res, "/index.html", ".html");
        break;
    async function mainRouteController(res, publicUrl, extname) {
        res.statusCode = 200;
        staticFile(res, publicUrl, extname);
      }
      module.exports = mainRouteController;
    const url = req.url;
    switch (url) {
        case "/game":
            gameRouteController(res);
      break;
        res.statusCode = 200;
        staticFile(res, "/index.html", ".html");
        break;default:
        defaultRouteController(res, url);
        const extname = String(path.extname(url)).toLowerCase();
        case "/vote":
            voteRouteController(req, res);
      break;
      if (extname in mimeTypes) {
        staticFile(res, url, extname);
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
}}
}); 