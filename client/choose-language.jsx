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
  menuItems
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

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
    console.log(menuItem.text);
  },

  render() {
    let menuItems = [
    { payload: '1', text: 'English' },
    { payload: '2', text: 'French' },
    { payload: '3', text: 'Japanese' },
    { payload: '4', text: 'Vietnamese' },
    ];

    return (
      <div className="container">
        <AppBar
          title="My Language"
          showMenuIconButton={false}
          zDepth={0}/>
        <h2 className="label">Learn</h2>
        <ListDivider />
        <DropDownMenu
          menuItems={menuItems}
          onChange={this.chooseLanguageToLearn}/>
        <h2 className="label">Fluent</h2>
        <ListDivider />
        <DropDownMenu menuItems={menuItems} />
      </div>
    );
  }
});
