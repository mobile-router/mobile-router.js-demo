require.config({
  baseUrl: '/javascripts/app/',
  paths: {
    'm.router': 'http://demo.aijc.net/js/M/build/m.min',
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

require(['m.router', 'fastclick', 'home', 'detail'], function(M, fastclick, home, detail) {

  M.router.init([
    {
      path: '/',
      getTemplate: home.render,
      callback: home.controller,
      onDestroy: home.destroy
    },
    {
      path: '/detail/:id',
      getTemplate: detail.render,
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