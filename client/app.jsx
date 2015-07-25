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
  toggleLogOut(){
    Meteor.logout();
    React.render(<Login />, document.getElementById("render-target"));
  },

  render() {
    if(Meteor.userId()){
      //Just logged in before
      return (
        <div className="container">
        { !Meteor.userId() ? (
          <AppBar title="Social lingu" />
        ):
        (
          <AppBar title="Social lingu"
          iconElementRight={<FlatButton label="Logout" onClick={this.toggleLogOut}/>}
          />
        )
        }
        </div>
      );
    }
    //not logged in
    return(<Login />);

  }
});
