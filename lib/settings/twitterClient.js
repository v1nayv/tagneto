var Twitter = require('twitter');

var TwitterClient = function TwitterClient(settings) {
  this.client = new Twitter({
    consumer_key: settings.consumerKey,
    consumer_secret: settings.consumerSecret,
    access_token_key: settings.accessTokenKey,
    access_token_secret: settings.accessTokenSecret
  });
}

Twitter.prototype.getHashTag = function(name) {
  if (name.charAt(0) !== "#") {
    name = "#" + name;
  }

  this.client.get('search/tweets', {q: name}, function(error, tweets, response) {
    console.log(tweets);
  });
}


module.exports = TwitterClient;
