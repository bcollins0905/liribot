  // .catch(function(err) {
  //  console.log(err);
  // });
//}

// then.function(response){
//         for (var i = 0; i < response.tracks.items[i].length; i++) {
//           console.log(JSON.stringify(response.tracks.items[i].artists[i].name, null, 2))
//           console.log(JSON.stringify(response.tracks.items[i].album.name, null, 2))
//           console.log(JSON.stringify(response.tracks.items[i].name, null, 2))
//           console.log(JSON.stringify(response.tracks.items[i].album.name, null, 2))
//       }     
// gets artist ------>response.tracks.items[0].artists[0].name,
///gets song title ----> response.tracks.items[0].name,
// A preview link of the song from Spotify  response.tracks.items[0].external_urls
// gets album title ----->  response.tracks.items[0].album.name,                                    "	


// var request = require("request");
// // Then run a request to the OMDB API with the movie specified
// request("http://www.omdbapi.com/?t=thinner&y=&plot=short&apikey=40e9cece", function(error, response, body) {
//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {
//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });

var fs = require("fs");
// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {
  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
  // We will then print the contents of data
  console.log(data);
  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");
  // We will then re-display the content as an array for later use.
  console.log(dataArr);
});