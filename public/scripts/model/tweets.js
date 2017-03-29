'use strict';

// (function(module) {

const tweets = {};

tweets.all = [];
tweets.filteredTweets = [];

function TweetObject(name, content, location, photo, time, hashtags){
  this.userName = name;
  this.content = content;
  this.location = location;
  this.photo = photo;
  this.time = time;
  this.hashtags = hashtags;
}

tweets.requestTweets = function() {
  $.ajax('/tweets', {
    method: 'GET'
  })
    .then((result) => {
      result.map(function (ele) {
        tweets.all.push(ele);
      })
      console.log(tweets.all);
// calling a function to filter tweets by whether or not a location is defined and populating tweets.filteredTweets.
      tweets.tweetsWitIt();
    })
      .catch(console.error);
}
tweets.requestTweets();

// Model method that filters the data for tweets with a particular attribute.
// we want to filter out all tweets that have null value for 'place'.
//where do we pass in place as attribute?...lab code has it in about controller
tweets.with = attr =>tweets.all.filter(tweet => tweet[attr]);


  // tweets.all[0].place.bounding_box.coordinates[0][0] is what we want to keep
//  tweets.with(tweets.all[0].place.bounding_box.coordinates[0][0]);
//  console.log('we are here');

 tweets.tweetsWitIt = function() {
   tweets.all.forEach(function(a){
     console.log('first log');
      if (a.place === null){
       console.log('dumg');
     } 
     else if (a.place.hasOwnProperty('bounding_box')) {
       console.log('heres one');
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




// module.tweets = tweets;
// })(window);