define(['service', 'zepto'], function(service, $) {

  function controller() {
    console.log('detail controller', this, arguments);
    if (this.cached) return;
    // do something
  }

  function destroy() {
    console.log('detail destroy', this, arguments);
    // destroy something
  }

  function render(cb) {
    service.getDetailContent(this.params.id, cb)
  }

  return {
    render: render,
    controller: controller,
    destroy: destroy
  };
  
});