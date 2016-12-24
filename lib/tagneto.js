var TwitterClient = require("./settings/twitterClient.js")

function Tagneto() {}

Tagneto.prototype.setTwitter = function(twitterSettings) {
  this.twitterClient = new TwitterClient(twitterSettings);
  return this;
}

Tagneto.prototype.getTwitter = function(twitterSettings) {
  return this.twitterClient
}

Tagneto.prototype.getHashTag = function(name){


}


module.exports = Tagneto;
