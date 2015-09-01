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
    var h = service.getDetailHeader('搜索结果', lastState && lastState.url || '', true);
    cb(h + service.getSearchBody());
  }

  return {
    render: render,
    controller: controller,
    onEnter: onEnter,
    destroy: destroy
  };

});