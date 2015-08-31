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

require(['m.router', 'fastclick', 'index'], function(M, fastclick, index) {

  M.router.init([
    {
      path: '/',
      getTemplate: index.getHeader,
      redirectTo: '/rec',
      redirectPushState: false,

      children: {
        routes: [
          {
            path: '/rec',
            getTemplate: index.render,
            onEnter: index.onEnter,
            callback: index.controller,
            onDestroy: index.destroy
          },
          {
            path: '/top',
            getTemplate: index.render,
            onEnter: index.onEnter,
            callback: index.controller,
            onDestroy: index.destroy
          },
          {
            path: '/category',
            getTemplate: index.render,
            onEnter: index.onEnter,
            callback: index.controller,
            onDestroy: index.destroy
          }
        ]
      }
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