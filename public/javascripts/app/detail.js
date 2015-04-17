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
    var id = this.params.id;
    if (!tplFn) {
      return $.get('/detail.jade', function(tpl, status) {
        tplFn = jade.compile(tpl, {});
        doRender(id, cb);
      });
    }
    doRender(id, cb);
  }

  function doRender(id, cb) {
    $.getJSON('/data/detail/' + id, function(data) {
      cb(tplFn({data: data}));
    });
  }

  return {
    render: render,
    controller: controller,
    destroy: destroy
  };
  
});