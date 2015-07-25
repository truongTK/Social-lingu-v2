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
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
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
    var email = this.refs.emailValue.getValue();
    var pwd = this.refs.loginPassword.getValue();
    var pwdConfirm = this.refs.loginPasswordAgain.getValue();
    //Check confirm password ok.
    if (validateEmail(email) == false) {
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
    // var _users = Meteor.users.find({ "emails.address" : email}).fetch();
    // console.log(_users);
    // if(_users.length > 0){
    //   $('div[id="errorMessage"]').text('Email not available');
    //   return;
    // }
    Accounts.createUser({email:email, password:pwd}, function(err, res) {
      if(err){
        $('div[id="errorMessage"]').text(err.reason);
        return;
      }else{
        React.render(<ChooseLanguage />, document.getElementById("render-target"));
      }
    });

  },

  render() {
    return (
      <div className="container">
      <AppBar
      title="SIGN UP"
      iconElementRight={<FlatButton label="Back" onClick={this.toggleToLogIn}/>} zDepth={0}/>
      <div id="errorMessage" class="message error-message"></div>
      <div className="email-field">
      <TextField
      hintText="Your email" ref="emailValue" id="signUpEmail"/>
      </div>
      <div className="password-field">
      <TextField ref="loginPassword" type="password"
      hintText="Your password" id="signUpPassword"/>
      </div>
      <div className="confirm-password-field">
      <TextField ref="loginPasswordAgain" type="password"
      hintText="Confirm your password" id="signUpPasswordAgain"/>
      </div>
      <div className="function-button" >
      <RaisedButton id="signUpButton" label="Sign up now" secondary={true} fullWidth={true} onClick={this.toggleSignUp}/>
      </div>
      </div>
    );
  }
});
