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
  toggleToSignUp() {
    React.render(<Signup />, document.getElementById("render-target"));
  },

  render() {
    return (
      <div className="container">
        <AppBar
          title="Login"/>
        <div className="email-field">
          <TextField
            hintText="Your email" id="email-login"/>
        </div>
        <div className="password-field">
          <TextField
            hintText="Your password" />
        </div>
        <div className="function-button" >
          <a href="#">Forgot your password?</a>
          <RaisedButton label="Login" secondary={true} fullWidth={true}/>
          <RaisedButton label="Sign up" secondary={true} fullWidth={true} onClick={this.toggleToSignUp} />
        </div>
      </div>
    );
  }
});
