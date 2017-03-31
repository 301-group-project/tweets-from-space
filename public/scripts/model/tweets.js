'use strict';

(function(module) {

let tweets = {};
tweets.filteredTweets = [];
tweets.all = [];


// constructor for filteredTweets that adds objects of tweets with useful properties
function TweetObject(name, content, location, photo, time, hashtags) {
  this.userName = name;
  this.content = content;
  this.location = location;
  this.photo = photo;
  this.time = time;
  this.hashtags = hashtags;
}


tweets.getTweets = function (inputValue) {
  if(inputValue.charAt(0) === '#') {
    inputValue = inputValue.replace('#', '%23');
  }
  tweets.filteredTweets = [];
  $.ajax(`/map/${inputValue}`, {
    method: 'GET'
  })
    .then((result) => {
      console.log(result);
      tweets.filteredTweets = [];

      result.map(function (ele) {
        tweets.all.push(ele);
      })
      // calling a function to filter tweets by whether or not a location is defined and populating tweets.filteredTweets.
      tweets.tweetsWitIt();
      tweets.all = [];
      mapTweets.initMap();
    })
    .catch(console.error);
}

// filters returned tweets by whether or not they have coordinates attached
tweets.tweetsWitIt = function () {
  tweets.all.forEach(function (a) {
    if (a.place) {
      tweets.filteredTweets.push(a = new TweetObject(
        a.user.name,
        a.text,
        tweets.centerFinder(a.place.bounding_box.coordinates),
        a.user.profile_image_url,
        a.created_at,
        a.entities.hashtags
      ));
    }
  });
}

// returns the exact center of the location bounding_box
tweets.centerFinder = function(corners) {
  return [(corners[0][0][0] + corners[0][2][0]) / 2,
  (corners[0][0][1] + corners[0][2][1]) / 2]
}


module.tweets = tweets;
})(window);