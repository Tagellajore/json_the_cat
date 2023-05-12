const request = require('request');

const breedName = process.argv[2];



const fetchBreedDescription = (breedName, callbackFunction) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
   
    if (error) {
      callbackFunction(error, null);
    } else {
      const data = JSON.parse(body);
    
      if (data.length === 0) {
        // console.log(`Breed ${breedName} not found.`);
        callbackFunction(`Breed ${breedName} not found.`, null);
      } else {
        callbackFunction(null, data[0].description);
        // console.log(data[0].description);
      }
      
    }
  });

};


module.exports = { fetchBreedDescription };
