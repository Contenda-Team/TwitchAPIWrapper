var assert = require('assert');
var taw = require('twitchapiwrapper');
describe('TwitchAPIWrapper Tests', function() {
  describe('#getAuth()', function() {
    it('should return https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope} replaced with given values for parameters', function() {
      assert.equal('https://id.twitch.tv/oauth2/authorize?client_id=6svp3j8ced7heh5yhrrr06e312gbe6&redirect_uri=https://www.profile.contenda.co/connected&response_type=code&scope=user:read:subscriptions%20user:read:email', taw.getAuth('6svp3j8ced7heh5yhrrr06e312gbe6', 'https://www.profile.contenda.co/connected', ['user:read:subscriptions', 'user:read:email']));
    });
  });

  describe('#getTokens()', function(){
    it('should ')
  })

  

});