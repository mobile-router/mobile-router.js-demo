define(['service', 'zepto'], function(service, $) {

  function controller() {
    if (this.cached) return;
    console.log(this, arguments);
    // do something
  }

  function destroy() {
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