const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body)
  if (error) {
    console.error('Request failed:', error);
  } else {
    const data = JSON.parse(body);
    // console.log(data)
    if(data.length === 0) {
      console.log(`Breed ${breedName} not found.`);
    } else {
      console.log(data[0].description);
    }
    
  }
  // console.log(data);
  // console.log(typeof data);
  // console.log(data[0]);
});

