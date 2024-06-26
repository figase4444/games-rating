
const path = require("path");
const parseBody = require("../appModules/http-utils/parse-body");
const { createRating, updateRating } = require("../appModules/rating");
const { WEIGHT, PATH_TO_RATING_FILE } = require("../appModules/rating/config");
const fs = require("fs").promises
const { json } = require("stream/consumers");


async function voteRouteController(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end("Not Found");
  } 

        res.statusCode = 200;
        const body = await parseBody(req)
        const data = JSON.parse(body)
        const rating = createRating(data,WEIGHT)

        const ratingFile = await fs.readFile(PATH_TO_RATING_FILE)
        const ratingArray = JSON.parse(ratingFile);
        const newRating = updateRating(ratingArray, data.id, rating)
        await fs.writeFile(PATH_TO_RATING_FILE, JSON.stringify(newRating))
        res.setHeader("Content-Type" ,"application/json")
        res.end(JSON.stringify(newRating))
      }
module.exports = voteRouteController