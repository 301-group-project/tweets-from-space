'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const Twitter = require('twitter');
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function (request, response) {
  response.sendFile('/public/index.html', { root: '.' });
});

app.get('/map*',function(request, response) {
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  // var params = { screen_name: request.query.screen_name || request.url.slice(12) };
  // client.get('statuses/user_timeline', params, function (error, tweets) {
  //   if (!error) {
  //     console.log(params.screen_name);
  //     response.send(tweets);
  //   } else {
  //     response.send(error);
  //   }
  // });

  var params = { q: request.query.q || request.url.slice(12) };
  client.get('search/tweets', params, function(error, tweets) {
    if (!error) {
      console.log(tweets.statuses);
      response.send(tweets.statuses);
    } else {
      response.send(error);
    }
  });
  
});

app.listen(PORT, function () {
  console.log(`Server up on ${PORT}`);
});

