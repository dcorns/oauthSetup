/**
 * signinCallback.js
 * Created by dcorns on 5/14/15.
 */

  function signinCallback(authResult) {
    if (authResult.status.signed_in) {
      console.log('authenticated with google plus. token: ' + authResult.access_token);
      console.dir(authResult);
      // Update the app to reflect a signed in user
      document.getElementById('signinButton').setAttribute('style', 'display: none');
    } else {
      // Update the app to reflect a signed out user
      // Possible error values:
      //   "user_signed_out" - User is signed-out
      //   "access_denied" - User denied access to your app
      //   "immediate_failed" - Could not automatically log in the user
      console.log('Sign-in state: ' + authResult['error']);
      document.getElementById('signinButton').setAttribute('style', 'display: block');
    }
  }

  //facebook login
(function (){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '351067905089592',
        xfbml      : true,
        version    : 'v2.3'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  })();