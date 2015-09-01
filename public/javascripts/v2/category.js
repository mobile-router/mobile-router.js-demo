define(['service', 'zepto', 'm.router'], function(service, $, M) {

  function controller() {
    if (this.cached) return;
  }

  function onEnter() {
    
  }

  function destroy() {
    // destroy something
  }

  function render(cb) {
    service.getCategory(this.params.key, function(category) {
      var h = service.getDetailHeader(category.name, 'category');
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