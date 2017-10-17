var action = process.argv[2];
var search = process.argv[3];

var keys = require("./keys.js");

switch (action) {
  case "my-tweets":
    getMyTweets();
    break;
  case "movie-this":
    getMovieInfo();
    break;
  case "spotify-this-song":
    getSongInfo();
    break;
  case "do-what-it-says":
    getRandom();
    break;
  }


function getMyTweets(){

  var Twitter = require('twitter')
  var client = new Twitter({
          consumer_key: keys.twitterKeys.consumer_key,
          consumer_secret:keys.twitterKeys.consumer_secret,
          access_token_key:keys.twitterKeys.access_token_key,
          access_token_secret:keys.twitterKeys.access_token_secret 
      })
  var params = {BWCollins82: 'nodejs'};
  	//console.log(client);

  	client.get('statuses/user_timeline', params, function(error, myTweets, response){
  	  		if (!error) {
  	    	for (var i = 0; i < myTweets.length; i++) {
  		  		console.log(myTweets[i].text)
  		  		console.log(myTweets[i].created_at)
     		}			
  	  }
  	})
 }

function getSongInfo(){
	var Spotify = require('node-spotify-api');
 	var spotify = new Spotify({
		id: keys.spotifyKeys.id,
		secret: keys.spotifyKeys.secret		
	})


  spotify
      .search({ type: 'track', query: search })
      .then(function(response){
        console.log(typeof response)
      for(var i in response.tracks.items) {  
        console.log("Artist: " + response.tracks.items[i].artists[0].name)
        console.log("Song Title: " + response.tracks.items[i].name)
        console.log("Album: " + response.tracks.items[i].album.name)
        console.log("Song Preview: " + response.tracks.items[i].preview_url)
      }
  })
}


function getMovieInfo(){
var request = require("request");
request("http://www.omdbapi.com/?t="+ search +"&y=&plot=short&apikey=40e9cece", function(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year Released: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Movie Produced in: " + JSON.parse(body).Country)
    console.log("Language: " + JSON.parse(body).Lauguage)
    console.log("Plot: " + JSON.parse(body).Plot)
    console.log("Actors: " + JSON.parse(body).Actors)
    }
  });
}

// function getRandom(){

// var fs = require("fs");

// fs.readFile("random.txt", "utf8", function(error, data) {

//   if (error) {
//     return console.log(error);
//   }
// var txt = data.split(',');

//  var txt = data.toString().split(',');

//       [txt[0].trim()](txt[1].trim());
//     });
//   };


