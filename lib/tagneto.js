var twitterSettings = require("./settings/twitterSettings.js")

function Tagneto() {}

Tagneto.prototype.setTwitter = function(twitterSettings) {
  this.twitterSettings = twitterSettings
  return this;
}

Tagneto.prototype.getTwitter = function(twitterSettings) {
  return this.twitterSettings
}

module.exports =  {
  Tagneto: Tagneto,
  TwitterSettings: twitterSettings
}
