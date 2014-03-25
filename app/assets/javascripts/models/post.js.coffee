# for more details see: http://emberjs.com/guides/models/defining-models/

Blog.Post = DS.Model.extend
  author: DS.attr 'string'
  content: DS.attr 'string'
