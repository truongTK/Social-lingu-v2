const {
  AppBar,
  RaisedButton,
  IconButton,
  NavigationClose,
  FlatButton,
  IconMenu,
  FontIcon,
  TextField,
  ListDivider,
  List,
  ListItem,
  DropDownMenu,
  menuItems,
  Avatar
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

var lstLearn = [];
var lstFluent = [];

var getUserName = function() {
  if(Meteor.userId()){
    var user = Meteor.user();
    if (user) {
      if(user.emails){
        var email = user.emails;
        return "Hello " + email[0].address;
      }else{
        return "Hello " + user.profile.name;
      }
    }
    return "Hello"
  }
  return "Hello";

};

var ProperListRender = React.createClass({
  render: function() {
    return (
      <ul>
      {this.props.list.map(function(listValue){
        return <li>{listValue}</li>;
      })}
      </ul>
    )
  }
});


ChooseLanguage = React.createClass({
  // This mixin makes the getMeteorData method work
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  chooseLanguageToLearn (e, selectedIndex, menuItem) {
    if($.inArray(menuItem.text, lstLearn) < 0){
      lstLearn.push(menuItem.text);
    }
    React.render(<ProperListRender list={lstLearn} />, document.getElementById('learningLanguage'));
  },
  chooseLanguageFluent (e, selectedIndex, menuItem) {
    if($.inArray(menuItem.text, lstFluent) < 0){
      lstFluent.push(menuItem.text);
    }
    React.render(<ProperListRender list={lstFluent} />, document.getElementById('fluentLanguage'));
  },
  toggleLogout(){
    Meteor.logout();
    React.render(<Login />, document.getElementById("render-target"));
  },
  onClickSave(){
    var studyLang = lstLearn;
    var fluentLang = lstFluent;
    var userId = Meteor.userId();
    var userProfile = {
      userId: userId,
      studyLanguage: studyLang,
      fluentLanguage: fluentLang
    };
    Meteor.call("updateProfile", userProfile);
  },


  render() {
    let menuItems = [
      { payload: '1', code: 'en', text: 'English' },
      { payload: '2', code: 'fr', text: 'French' },
      { payload: '3', code: 'ja', text: 'Japanese' },
      { payload: '4', code: 'vi', text: 'Vietnamese' },
    ];

    return (
      <div className="container">
      <AppBar id="chooseLanguageBar"
      title={getUserName()}
      zDepth={0}
      iconElementRight={<FlatButton id="logoutButton" label="Log out" onClick={this.toggleLogout}/>}/>
      <h2 className="label">Learn</h2>
      <ListDivider />
      <DropDownMenu
      menuItems={menuItems}
      onChange={this.chooseLanguageToLearn}/>
      <div id="learningLanguage">
      </div>
      <h2 className="label">Fluent</h2>
      <ListDivider />
      <DropDownMenu menuItems={menuItems}
      onChange={this.chooseLanguageFluent}/>
      <div id="fluentLanguage">
      </div>
      <div id="btnSave" >
      <RaisedButton label="Save" secondary={true} fullWidth={true} onClick={this.onClickSave}/>
      </div>
      </div>
    );
  }
});
