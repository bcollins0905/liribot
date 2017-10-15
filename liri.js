var keys = require("./keys.js");


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
	var client = new Spotify({
		client_id: keys.spotifyKeys.consumer_key,
		client_secret: keys.spotifyKeys.client_secret
	})
console.log(getsongInfo)
}
var params = {BWCollins82: 'nodejs'};

	
var action = process.argv[2];
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

