Blog.Store = DS.Store.extend({
  revision: 12,
  namespace: '/api',
  configure: 'plurals', post: 'posts'
});