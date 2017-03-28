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
      .catch((err) => { console.error })
}

module.tweets = tweets;
})(window);