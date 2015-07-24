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
    if(Meteor.userId()){
      //Just logged in before
      return (
        <div className="container">
        <AppBar
        title="Social lingu"/>
        </div>
      );
    }
    //not logged in
    return(<Login />);

  }
});
