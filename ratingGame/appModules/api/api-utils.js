function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } 
async function getData(url) {
  try{
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

module.exports = {getData,getRandomGame}