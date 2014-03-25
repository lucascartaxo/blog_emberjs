Blog.PostsRoute = Ember.Route.extend({
  model: function() {
    this.get("store").find("post")
  }
});