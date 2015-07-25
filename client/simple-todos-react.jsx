// Define a collection to hold our tasks
// This code is executed on the client only
Meteor.subscribe('userinfo');
Meteor.subscribe('languages');
Meteor.subscribe('request');
Meteor.subscribe('reply');
Meteor.subscribe('rating');
Meteor.subscribe("users");
Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  injectTapEventPlugin();
  React.render(<App />, document.getElementById("render-target"));
});
