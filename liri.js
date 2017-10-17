var action = process.argv[2];
var search = process.argv[3];

var keys = require("./keys.js");

switch (action) {
  case "my-tweets":
    getMyTweets();
    break;
  case "movie-this":
    deposit();
    break;
  case "spotify-this-song":
    getSongInfo();
    break;
  case "do-what-it-says":
    lotto();
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
      //response = JSON.stringify(response, null, 2);
      for(var i in response.tracks.items) {  
        console.log(response.tracks.items[i].artists[0].name)
        console.log(response.tracks.items[i].album.name)
        console.log(response.tracks.items[i].name)
        console.log(response.tracks.items[i].album.name)
      }

  // .catch(function(err) {
  //  console.log(err);
  // });
//}

// function(response){
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


})
}



