var tagnetoModule = require("../lib/tagneto.js")
var Tagneto = tagnetoModule.Tagneto
var TwitterSettings = tagnetoModule.TwitterSettings

describe("Tagneto", function() {
  var twitterSettings = new TwitterSettings({
    consumerKey: "blah-consumer-key",
    consumerSecret: "blah-consumer-secret",
    accessTokenKey: "blah-token-key",
    accessTokenSecret: "blah-token-secret"
  })

  var tagneto;

  beforeEach(function() {
    tagneto = new Tagneto();
  });

  describe("for twitter settings", function() {
    it("sets twitter settings", function() {
      tagneto.setTwitter(twitterSettings);

      expect(tagneto.getTwitter()).toEqual(twitterSettings);
    });
  });
});
