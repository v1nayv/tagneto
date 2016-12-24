var Tagneto = require("../lib/tagneto.js")
var TwitterClient = require("../lib/settings/twitterClient.js")

describe("Tagneto", function() {
  var twitterSettings ={
    consumerKey: "blah-consumer-key",
    consumerSecret: "blah-consumer-secret",
    accessTokenKey: "blah-token-key",
    accessTokenSecret: "blah-token-secret"
  };

  var tagneto;
  var twitterClient = new TwitterClient(twitterSettings);

  beforeEach(function() {
    tagneto = new Tagneto();
  });

  describe("for twitter settings", function() {
    it("sets twitter settings", function() {
      tagneto.setTwitter(twitterSettings);

      expect(tagneto.getTwitter()).toEqual(jasmine.any(TwitterClient));
    });
  });
});
