define(['service', 'zepto'], function(service, $) {

  function controller() {
    if (this.cached) return;
  }

  function onEnter() {
    checkNav(this.path.substr(1));
  }

  function checkNav(h) {
    var nav = $('.nav');
    nav.find('a').removeClass('active');
    nav.find('a[href="'+h+'"]').addClass('active');
  }

  function destroy() {
    // destroy something
  }

  function render(cb) {
    service.getIndexContent(cb)
  }

  return {
    getHeader: service.getHeader,
    getCategoryTpl: service.getCategoryTpl,
    render: render,
    controller: controller,
    onEnter: onEnter,
    destroy: destroy
  };

});