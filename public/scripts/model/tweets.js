'use strict';

(function(module) {

const tweets = {};

tweets.all = [];

tweets.requestTweets = function() {
  $.ajax('/tweets', {
    method: 'GET'
  })
    .then((result) => {
      result.map(function (ele) {
        tweets.all.push(ele);
      })
    })
      .catch(console.error);
}
tweets.requestTweets();

// Model method that filters the data for tweets with a particular attribute.
// we want to filter out all tweets that have null value for 'place'.
//where do we pass in place as attribute?...lab code has it in about controller
tweets.with = attr =>tweets.all.filter(tweet => tweet[attr]);


  // tweets.all[0].place.bounding_box.coordinates[0][0] is what we want to keep
 tweets.with(tweets.all[0].place.bounding_box.coordinates[0][0]);
 console.log('we are here');




module.tweets = tweets;
})(window);