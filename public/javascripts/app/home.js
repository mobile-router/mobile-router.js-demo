define(['jade', 'zepto'], function(jade, $) {

  var tplFn;

  function controller() {
    if (this.cached) return;
    console.log(this, arguments);
    // do something
  }

  function destroy() {
    // destroy something
  }

  function render(cb) {
    if (!tplFn) {
      return $.get('/list.jade', function(tpl, status) {
        tplFn = jade.compile(tpl, {});
        doRender(cb);
      });
    }
    doRender(cb);
  }

  function doRender(cb) {
    $.getJSON('/data/list', function(data) {
      cb(tplFn({data: data}));
    });
  }

  return {
    render: render,
    controller: controller,
    destroy: destroy
  };

});