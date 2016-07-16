var TwitterSettings = module.exports = function TwitterSettings(settings) {
  this.consumerkey = settings.consumerKey;
  this.consumerSecret = settings.consumerSecret;
  this.accessTokenKey = settings.accessTokenKey;
  this.accessTokenSecret = settings.accessTokenSecret;
}

TwitterSettings.prototype.getConsumerKey = function() {
  return this.consumerkey;
}

TwitterSettings.prototype.getConsumerSecret = function() {
  return this.consumerSecret;
}

TwitterSettings.prototype.getAccessTokenKey = function() {
  return this.accessTokenKey;
}

TwitterSettings.prototype.getAccessTokenSecret = function() {
  return this.accessTokenSecret;
}
