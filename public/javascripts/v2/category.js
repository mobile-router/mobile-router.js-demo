define(['service', 'zepto', 'm.router'], function(service, $, M) {

  function controller() {
    console.log('category controller', this);
    if (this.cached) return;
  }

  function onEnter() {
    
  }

  function destroy() {
    console.log('category destroy', this);
  }

  function render(cb) {
    service.getCategory(this.params.key, function(category) {
      var h = service.getDetailHeader(category.name, {
        data: {
          href: 'category'
        }
      });
      service.getIndexContent(function(bdy) {
        cb(h + bdy);
      });
    });
  }

  return {
    render: render,
    controller: controller,
    onEnter: onEnter,
    destroy: destroy
  };

});