require.config({
  baseUrl: '/javascripts/app/',
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

require(['m.router', 'fastclick', 'contacts', 'detail', 'edit'], function(M, fastclick, contacts, detail, edit) {

  M.router.init([
    {
      path: '/',
      getTemplate: contacts.render,
      callback: contacts.controller,
      onDestroy: contacts.destroy
    },
    {
      path: '/detail/:id',
      getTemplate: detail.render,
      callback: detail.controller,
      onDestroy: detail.destroy
    },
    {
      path: '/edit/:id',
      cacheTemplate: false,
      getTemplate: edit.render,
      callback: edit.controller,
      onDestroy: edit.destroy
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