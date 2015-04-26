define(['service'], function(service) {

  function controller() {
    if (this.cached) return;
    console.log(this, arguments);
    // do something
  }

  function destroy() {
    // destroy something
  }

  function render(cb) {
    service.getContactsContent(cb)
  }

  return {
    render: render,
    controller: controller,
    destroy: destroy
  };

});