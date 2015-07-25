const {
  AppBar,
  RaisedButton,
  IconButton,
  NavigationClose,
  FlatButton,
  IconMenu,
  FontIcon,
  TextField
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();
var isFirstLogin = function() {
  var userId = Meteor.userId();
  var lstUserProfile = UserInfo.find({
    UserId: userId
  }).fetch();
  if (lstUserProfile && lstUserProfile.length > 0) {

    return false;
  }
  return true;
};

Login = React.createClass({
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  togglePasswordLogin(){
    var email = $('#login-username').val();
    var pwd = $('#login-password').val();
    Meteor.loginWithPassword(email, pwd,function(err, res) {
      if (err) {
        $('div[id="errorMessage"]').text("Invalid email or password");
      } else {
        console.log(isFirstLogin());
        if (isFirstLogin()) {
          console.log("THIS IS FIRST LOGIN");
        }
        React.render(<App />, document.getElementById("render-target"));
      }
    });
  },
  toggleToSignUp() {
    React.render(<Signup />, document.getElementById("render-target"));
  },
  toggleFacebookLogin(){
    Meteor.loginWithFacebook(function(err, res) {
      if (err) {
        $('div[id="errorMessage"]').text("Can't connect to Facebook.");
      } else {
        console.log(isFirstLogin());
        if (isFirstLogin()) {
          console.log("THIS IS FIRST LOGIN");
        }
        React.render(<App />, document.getElementById("render-target"));
      }
    });
  },
  toggleGoogleLogin(){
    Meteor.loginWithGoogle(function(err, res) {
      if (err) {
        $('div[id="errorMessage"]').text("Can't connect to Google.");
      } else {
        console.log(isFirstLogin());
        if (isFirstLogin()) {
          console.log("THIS IS FIRST LOGIN");
        }
        React.render(<App />, document.getElementById("render-target"));
      }
    });
  },
  render() {
    return (
      <div className="container">
      <AppBar
      title="LOGIN"/>
      <div id="errorMessage" class="message error-message"></div>
      <div className="email-field">
      <TextField id="login-username"
      hintText="Your email" id="email-login" fullWidth={true}/>
      </div>
      <div className="password-field">
      <TextField id="login-password"
      hintText="Your password" fullWidth={true}/>
      </div>
      <div>
      <RaisedButton label="Login" secondary={true} fullWidth={true} onClick={this.togglePasswordLogin}/>
      <RaisedButton label="Sign up" secondary={true} fullWidth={true} onClick={this.toggleToSignUp} />
      <RaisedButton label="Login with Facebook" secondary={true} fullWidth={true} onClick={this.toggleFacebookLogin}/>
      <RaisedButton label="Login with Google" secondary={true} fullWidth={true} onClick={this.toggleGoogleLogin}/>
      </div>
      </div>
    );
  }
});
