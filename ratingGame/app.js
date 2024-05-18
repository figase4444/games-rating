const http = require('http');
const gameRouteController = require("./controllers/game.js");
const voteRouteController = require("./controllers/vote.js");
const mainRouteController = require("./controllers/main.js");
const defaultRouteController = require("./controllers/main.js");
const staticFile = require("./appModules/http-utils/static-file.js");
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
      break;
  }
});
server.listen(3005);