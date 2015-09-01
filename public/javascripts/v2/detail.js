define(['service', 'zepto', 'm.router'], function(service, $, M) {

  function controller() {
    console.log('detail controller', this);
    if (this.cached) return;
  }

  function onEnter() {
    
  }

  function destroy() {
    console.log('detail destroy', this);
  }

  function render(cb) {
    var lastState = M.history.getPrevState();
    var h = service.getDetailHeader('详情页', lastState || '');
    cb(h + service.getDetailBody(this.params.appId));
  }

  return {
    render: render,
    controller: controller,
    onEnter: onEnter,
    destroy: destroy
  };

});