const { PATH_TO_RATING_FILE } = require("./config")
const makeRatinngFile = require ("./rating-file")
const { createRating, updateRating} = require("./calculations")
module.exports = {
    makeRatinngFile,
    PATH_TO_RATING_FILE,
    createRating,
    updateRating
}