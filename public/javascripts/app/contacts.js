define(['service'], function(service) {

  function controller() {
    console.log('contacts controller', this, arguments);
    if (this.cached) return;
    // do something
  }

  function destroy() {
    console.log('contacts destroy', this, arguments);
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