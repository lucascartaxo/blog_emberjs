Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars, depth0, helpers, partials, data) { this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Posts");
  }

  data.buffer.push("<header id=\"header\">\n  <h2>");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n  <nav>\n    <ul>\n      <li>");
  stack1 = (helper = helpers.linkTo || (depth0 && depth0.linkTo),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts", options) : helperMissing.call(depth0, "linkTo", "posts", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </nav>\n</header>\n\n<div id=\"content\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
