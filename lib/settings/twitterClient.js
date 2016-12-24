var Twitter = require('twitter');

var TwitterClient = function TwitterClient(settings) {
  this.client = new Twitter({
    consumer_key: settings.consumerKey,
    consumer_secret: settings.consumerSecret,
    access_token_key: settings.accessTokenKey,
    access_token_secret: settings.accessTokenSecret
  });
}


module.exports = TwitterClient;
