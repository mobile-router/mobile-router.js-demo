define(['service', 'zepto', 'm.router'], function(service, $, M) {

  function controller() {
    console.log('search controller', this);
    if (this.cached) return;
  }

  function onEnter() {
    
  }

  function destroy() {
    console.log('search destroy', this);
  }

  function render(cb) {
    var lastState = M.history.getPrevState();
    var h = service.getDetailHeader('搜索结果', lastState || '', true);
    cb(h + service.getSearchBody());
  }

  return {
    render: render,
    controller: controller,
    onEnter: onEnter,
    destroy: destroy
  };

});