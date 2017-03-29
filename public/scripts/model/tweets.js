'use strict';

(function(module) {

let tweets = {};

tweets.all = [];
tweets.filteredTweets = [];

// constructor for filteredTweets that adds objects of tweets with useful properties
function TweetObject(name, content, location, photo, time, hashtags) {
  this.userName = name;
  this.content = content;
  this.location = location;
  this.photo = photo;
  this.time = time;
  this.hashtags = hashtags;
}

tweets.getTweets = function (screen) {
  $.ajax(`/map?search=${screen}`, {
    method: 'GET'
  })
    .then((result) => {
      tweets.filteredTweets = [];
      result.map(function (ele) {
        tweets.all.push(ele);
      })
      // calling a function to filter tweets by whether or not a location is defined and populating tweets.filteredTweets.
      tweets.tweetsWitIt();
      tweets.all = [];
    })
    .catch(console.error);
}

// filters returned tweets by whether or not they have coordinates attached
tweets.tweetsWitIt = function () {
  tweets.all.forEach(function (a) {
    if (a.place === null) {
    }
    else if (a.place.hasOwnProperty('bounding_box')) {
      // below is the list of desired properties of returned tweets, run through the TweetObject contructor and pushed into filteredTweets
      tweets.filteredTweets.push(a = new TweetObject(
        a.user.name,
        a.text,
        a.place.bounding_box.coordinates[0][0],
        a.user.profile_image_url,
        a.created_at,
        a.entities.hashtags
      ));
    }
  })
}


module.tweets = tweets;
})(window);