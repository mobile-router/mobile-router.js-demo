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
    var lastState = M.history.getPrevState();
    var h = service.getDetailHeader('详情页', lastState && lastState.url || '');
    cb(h + service.getDetailBody(this.params.appId));
  }

  return {
    render: render,
    controller: controller,
    onEnter: onEnter,
    destroy: destroy
  };

});