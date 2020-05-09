const firebase = require('firebase')
const provider = new firebase.auth.FacebookAuthProvider()
class Auth {
  constructor() {
    this.config = {}
  }
  async facebookAuth() {
    try {
      provider.setCustomParameters({
        'display': 'popup'
      });
      const results = await firebase.auth().signInWithRedirect(provider)
      console.log(results)
    }
    catch (err) {
      console.log(err)
    }
  }
  twitterAuth() { }
}

module.exports = Auth