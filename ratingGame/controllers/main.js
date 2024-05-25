const path = require("path");
const staticFile = require("../appModules/http-utils/static-file");
const mimeTypes = require("../appModules/http-utils/mime-types");
const { getData, endpoints } = require("../appModules/api");
const { makeRatinngFile, PATH_TO_RATING_FILE } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games)
  await makeRatinngFile(PATH_TO_RATING_FILE, data)
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController; 

async function defaultRouteController(res, url) {
  const extname = String(path.extname(url)).toLowerCase();
  if (extname in mimeTypes) {
    staticFile(res, url, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}

module.exports = defaultRouteController;