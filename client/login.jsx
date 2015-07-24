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
  isFirstLogin() {
    var userId = Meteor.userId();
    var lstUserProfile = UserInfo.find({
      UserId: userId
    }).fetch();
    if (lstUserProfile && lstUserProfile.length > 0) {

      return false;
    }
    return true;
  },
  toggleToSignUp() {
    React.render(<Signup />, document.getElementById("render-target"));
  },
  toggleFacebookLogin(){
    Meteor.loginWithFacebook(function(err, res) {
      if (err) {
        $('div[id="errorMessage"]').text("Can't connect to Facebook.");
      } else {
        console.log(this.isFirstLogin());
        if (this.isFirstLogin()) {
          console.log("THIS IS FIRST LOGIN");
        }
      }
    });
  },
  toggleGoogleLogin(){
    Meteor.loginWithGoogle(function(err, res) {
      if (err) {
        $('div[id="errorMessage"]').text("Can't connect to Google.");
      } else {
        console.log(this.isFirstLogin());
        if (this.isFirstLogin()) {
          console.log("THIS IS FIRST LOGIN");
        }
      }
    });
  },
  render() {
    return (
      <div className="container">
      <AppBar
      title="LOGIN TO SOCIAL LINGU"/>
      <div className="email-field">
      <TextField
      hintText="Your email" id="email-login" fullWidth={true}/>
      </div>
      <div className="password-field">
      <TextField
      hintText="Your password" fullWidth={true}/>
      </div>
      <div className="function-button" >
      <a href="#">Forgot your password?</a>
      <RaisedButton label="Login" secondary={true} fullWidth={true}/>
      <RaisedButton label="Sign up" secondary={true} fullWidth={true} onClick={this.toggleToSignUp} />
      <RaisedButton label="Login with Facebook" secondary={true} fullWidth={true} onClick={this.toggleFacebookLogin}/>
      <RaisedButton label="Login with Google" secondary={true} fullWidth={true} onClick={this.toggleGoogleLogin}/>
      </div>
      </div>
    );
  }
});
