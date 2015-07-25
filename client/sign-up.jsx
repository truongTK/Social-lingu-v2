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

var isValidPassword = function(val) {
  return val.length >= 6 ? true : false;
};
var isEmailValid = function(address) {
  return /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(address);
};
var isValidEmail = function(sValue) {
  if (sValue.indexOf('@') <0) {
    return false;
  }
  if (sValue.indexOf('.') < 0) {
    return false;
  }
  if (sValue.indexOf('@.') >= 0) {
    return false;
  }
  if (sValue.indexOf('.@') >= 0) {
    return false;
  }
  return true;
};

Signup = React.createClass({
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  toggleToLogIn() {
    React.render(<Login />, document.getElementById("render-target"));
  },
  toggleSignUp(){
    var email = $('#login-username').val();
    var pwd = $('#login-password').val();
    var pwdConfirm = $('#login-password-again').val();
    //Check confirm password ok.
    if (isEmailValid(email) == false) {
      $('div[id="errorMessage"]').text('Invalid email');
      return;
    }
    if (isValidPassword(pwd) == false) {
      $('div[id="errorMessage"]').text('Password must be more than 6 charactors');
      return;
    }
    if (pwd != pwdConfirm) {
      $('div[id="errorMessage"]').text('Confirm password not match.');
      return;
    }
    //If email and password ok --> Done
    if (isValidPassword(pwd) && isValidEmail(email)) {
      Accounts.createUser({
        email: email,
        password: pwd
      });
      React.render(<App />, document.getElementById("render-target"));
    }
  },

  render() {
    return (
      <div className="container">
      <AppBar
      title="SIGN UP"
      iconElementRight={<FlatButton label="Back" onClick={this.toggleToLogIn}/>} />
      <div id="errorMessage" class="message error-message"></div>
      <div className="email-field">
      <TextField id="login-username"
      hintText="Your email" id="email-login"/>
      </div>
      <div className="password-field">
      <TextField id="login-password"
      hintText="Your password" />
      </div>
      <div className="confirm-password-field">
      <TextField id="login-password-again"
      hintText="Confirm your password" />
      </div>
      <div className="function-button" >
      <RaisedButton label="Sign up now" secondary={true} fullWidth={true} onClick={this.toggleSignUp}/>
      </div>
      </div>
    );
  }
});
