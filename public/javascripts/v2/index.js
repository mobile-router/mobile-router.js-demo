define(['service', 'zepto'], function(service, $) {

  function controller() {
    console.log('index controller', this);
    if (this.cached) return;
  }

  function onEnter() {
    checkNav(this.path.substr(1));
  }

  function checkNav(h) {
    var nav = $('.nav');
    nav.find('a').removeClass('active');
    nav.find('a[data-href="'+h+'"]').addClass('active');
  }

  function destroy() {
    console.log('index destroy', this);
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