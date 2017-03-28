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

app.get('/tweets', function (req, res) {
  console.log('hello world');
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  var params = { screen_name: req.query.screen_name || 'twts_frm_spce' };
  client.get('statuses/user_timeline', params, function (error, tweets) {
    if (!error) {
      console.log(req.query.screen_name);
      res.send(tweets);
    } else {
      res.send(error);
    }
  });
});

app.listen(PORT, function () {
  console.log(`Server up on ${PORT}`);
});

