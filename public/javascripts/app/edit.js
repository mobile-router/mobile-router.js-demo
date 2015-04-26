define(['service', 'zepto', 'm.router'], function(service, $, M) {

  function controller() {
    if (this.cached) return;
    
    var that = this;

    // Done
    var ele = $(this.element);
    ele.find('.page-header .btn-right').click(function() {
      M.router.showLoading();
      service.saveDetailInfo({
        id: that.params.id,
        name: ele.find('.txt[name="name"]').val(),
        number: ele.find('.txt[name="number"]').val()
      }, function(data) {
        // to detail
        M.router.hideLoading();
        M.router.navigate('/detail/' + data.id, {
          rel: 'back',
          cacheTemplate: false
        });
      })
    });
  }

  function destroy() {
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