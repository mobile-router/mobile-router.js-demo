define(['zepto'], function($) {

  function commonHeader(ct) {
    return '<div class="header page-header">' + ct + '</div>';
  }

  function buildList(data) {
    var r = ['<ul class="list">'];
    $.each(data, function(_, d) {
      r.push('<li><a href="/download/'+d.appId+'" class="download">下载</a><a href="" class="cont"><img src="'+d.icon+'"><div class="des"><p>'+d.publisherName+'</p><h3>'+d.displayName+'</h3></div></a></li>');
    });
    r.push('</ul>')
    return r.join('');
  }

  function getIndexHeader() {
    return commonHeader('<div class="nav"><a href="#" data-href="rec" class="active">精品</a><a href="#" data-href="top">排行</a><a href="#" data-href="category">分类</a></div>');
  }

  function getIndexContent(cb) {
    $.get('/javascripts/v2/index.json', function(data) {
      var b = '<div class="page-body">'+buildList(data.data)+'</div>';
      cb(b);
    });
  }

  function getDetailHeader(title) {
    var h = commonHeader('<h3 class="title title2">'+title+'</h3><a href="#" class="btn-left back-btn"></a><a href="#" class="btn-right">Search</a>');
  }

  return {

    getHeader: getIndexHeader,
    getIndexContent: getIndexContent

  };
  
});