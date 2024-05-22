function createRating(obj, weight) {
    retutn (
        obj.gameplay * weight.gameplay +
        obj.design * weight.design +
        obj.idea * weight.idea
    )
}
function updateRating (array,id,rating) {
    const indx = array.findundex((item) => item.id === id)
    array[index].rating += rating
    return array
}
module.exports = { createRating, updateRating}