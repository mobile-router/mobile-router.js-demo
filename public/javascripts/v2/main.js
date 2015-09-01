require.config({
  baseUrl: '/javascripts/v2/',
  paths: {
    'm.router': '/javascripts/lib/m',
    'jade': '/javascripts/lib/jade',
    'zepto': '/javascripts/lib/zepto.min',
    'fastclick': '/javascripts/lib/fastclick.min'
  },
  shim: {
    zepto: {
      exports: 'Zepto'
    }
  }
});

require([
  'm.router',
  'fastclick',
  'index',
  'category',
  'search',
  'detail'
], function(M, fastclick, index, category, search, detail) {

  M.router.init([
    {
      path: '/',
      getTemplate: index.getHeader,
      redirectTo: function() {
        var to = this.options.state.data.to || '/rec';
        return to;
      },
      redirectPushState: false,

      children: {
        routes: [
          {
            path: '/category',
            getTemplate: index.getCategoryTpl,
            onEnter: index.onEnter,
            callback: index.callback,
            onDestroy: index.destroy
          },
          {
            path: '/{type:(rec|top)}',
            getTemplate: index.render,
            onEnter: index.onEnter,
            callback: index.controller,
            onDestroy: index.destroy
          }
        ]
      }
    },
    {
      path: '/category/:key',
      getTemplate: category.render,
      onEnter: category.onEnter,
      callback: category.controller,
      onDestroy: category.destroy
    },
    {
      path: '/search',
      cacheTemplate: false,
      aniClass: 'slideup',
      getTemplate: search.render,
      onEnter: search.onEnter,
      callback: search.controller,
      onDestroy: search.destroy
    },
    {
      path: '/detail/:appId',
      cacheTemplate: false,
      getTemplate: detail.render,
      onEnter: detail.onEnter,
      callback: detail.controller,
      onDestroy: detail.destroy
    }
  ], {
    viewsSelector: '.pages',
    error: function() {
      M.router.navigate('/');
    }
  });

  fastclick.attach(M.body);

  M.history.start();

});