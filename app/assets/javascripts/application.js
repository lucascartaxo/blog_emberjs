// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require handlebars
//= require ember
//= require ember-data
//= require_self

var Blog = Ember.Application.create({
  LOG_TRANSITIONS: true
});


DS.RESTAdapter.reopen({
  host: 'http://localhost:3000/api'
});

Blog.Router.map(function() {
  this.resource("about");
  this.resource("posts", function () {
    this.resource("post", { path: ":post_id"});
  });
});

Blog.Post = DS.Model.extend({
  author: DS.attr("string"),
  title: DS.attr("string"),
  body: DS.attr("string")
});

Blog.PostsRoute = Ember.Route.extend({

  model: function(){
    return this.store.findAll("post")
  }
});

Blog.PostRoute = Em.Route.extend({

  model: function (params) {
    return this.store.find("post", params);
  }

});