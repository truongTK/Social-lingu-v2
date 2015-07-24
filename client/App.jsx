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

App = React.createClass({
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
      title="Login"/>
      <TextField
      hintText="Your email" id="email-login"/>
      <TextField
      hintText="Your password" />
      <div className="button" >
      <a href="#">Forgot your password?</a>
      <RaisedButton label="Login" secondary={true} fullWidth={true}/>
      <RaisedButton label="Sign up" secondary={true} fullWidth={true}/>
      </div>
      </div>
    );
  }
});
