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

  render() {
    return (
      <div className="container">
      <AppBar
  title="Sign Up"/>

      <div className="email-field">
      <TextField
      hintText="Your email" id="email-login"/>
      </div>
      <div className="password-field">
      <TextField
      hintText="Your password" />
      </div>
      <div className="confirm-password-field">
      <TextField
      hintText="Confirm your password" />
      </div>
      <div className="function-button" >
      <RaisedButton label="Sign up now" secondary={true} fullWidth={true}/>
      </div>
      </div>
    );
  }
});