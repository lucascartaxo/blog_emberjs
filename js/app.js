var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource("about");
  this.resource("posts");
});

App.Router.reopen({
  // location: 'none'
});
