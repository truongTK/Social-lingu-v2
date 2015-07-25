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
Meteor.subscribe("userinfo");
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
  toggleLogOut(){
    Meteor.logout();
    React.render(<Login />, document.getElementById("render-target"));
  },

  render() {
    if(Meteor.userId()){
      return (<ChooseLanguage/>);
    }
    return (<Login/>);
  }
});
