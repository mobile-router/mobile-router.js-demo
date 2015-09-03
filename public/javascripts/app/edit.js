define(['service', 'zepto', 'm.router'], function(service, $, M) {

  function controller() {
    console.log('edit controller', this, arguments);
    if (this.cached) return;
    
    var that = this;

    // Done
    var ele = $(this.element);
    ele.find('.page-header .btn-right').click(function() {
      M.router.routeView.showLoading();
      service.saveDetailInfo({
        id: that.params.id,
        name: ele.find('.txt[name="name"]').val(),
        number: ele.find('.txt[name="number"]').val()
      }, function(data) {
        // to detail
        M.router.routeView.hideLoading();
        M.router.navigate('/detail/' + data.id, {
          cacheTemplate: false
        });
      })
    });
  }

  function destroy() {
    console.log('edit destroy', this, arguments);
    // destroy something
  }

  function render(cb) {
    service.getEditContent(this.params.id, cb)
  }

  return {
    render: render,
    controller: controller,
    destroy: destroy
  };
  
});
