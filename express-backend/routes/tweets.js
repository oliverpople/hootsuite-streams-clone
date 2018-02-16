var express = require('express');
var Twitter = require('twitter');
require('dotenv').config();

var router = express.Router();

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

  router.get('/', function(req, res, next) {
      // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
    client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 20 }, function(error, tweets, response) {
      if (!error) {
        res.send(tweets)
      }
      else {
        res.status(500).json({ error: error });
      }
    });
  });

module.exports = router;
