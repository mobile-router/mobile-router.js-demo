define(['zepto'], function($) {

  function commonHeader(ct) {
    return '<div class="header page-header">' + ct + '</div>';
  }

  function buildList(data) {
    var r = ['<ul class="list">'];
    $.each(data, function(_, d) {
      r.push(
        '<li>' +
          '<a href="http://m.app.mi.com//download/'+d.appId+'" target="_blank" class="download">下载</a>' +
          '<a href="detail/' + d.appId + '" class="cont">' +
            '<img src="'+d.icon+'">' +
            '<div class="des">' +
              '<p>'+d.publisherName+'</p>' +
              '<h3>'+d.displayName+'</h3>' +
            '</div>' +
          '</a>' +
        '</li>'
      );
    });
    r.push('</ul>')
    return r.join('');
  }

  function getIndexHeader() {
    return commonHeader(
      '<div class="nav">' +
        '<a href="rec">精品</a>' +
        '<a href="top">排行</a>' +
        '<a href="category">分类</a>' +
      '</div>'
    );
  }

  function buildCategorys(data) {
    var r = ['<ul class="list list2">'];
    $.each(data, function(_, d) {
      r.push(
        '<li>' +
          '<a href="category/' + d.key + '" class="cont">' +
            '<img src="'+d.icon+'">' +
            '<div class="des">' +
              '<h3>'+d.name+'</h3>' +
            '</div>' +
          '</a>' +
        '</li>'
      );
    });
    r.push('</ul>')
    return r.join('');
  }

  var categorys = null;
  function getCategoryData(cb) {
    if (categorys) return cb(categorys);
    $.get('/javascripts/v2/category.json', function(data) {
      categorys = data.data;
      cb(categorys);
    });
  }
  function getCategoryTpl(cb) {
    getCategoryData(function(data) {
      var b = '<div class="page-body">'+buildCategorys(data)+'</div>';
      cb(b);
    });
  }

  function getIndexContent(cb) {
    $.get('/javascripts/v2/index.json', function(data) {
      var b = '<div class="page-body">'+buildList(data.data)+'</div>';
      cb(b);
    });
  }

  function getDetailHeader(title, backUrl, inSearch) {
    var h = commonHeader(
      '<h3 class="title title2">'+title+'</h3>' +
      '<a href="' +backUrl+ '" data-rel="back" class="btn-left back-btn"></a>' +
      (inSearch ? '' : '<a href="search" class="btn-right">Search</a>')
    );
    return h;
  }

  return {
    getHeader: getIndexHeader,
    getCategory: function(key, cb) {
      getCategoryData(function(data) {
        $.each(data, function(_, item) {
          if (item.key === key) {
            cb(item);
            return false;
          }
        });
      });
    },
    getSearchBody: function() {
      return '<div class="page-body">Search content</div>';
    },
    getDetailBody: function(appId) {
      var t = '<div class="page-body">';
      t += 'App(' + appId + ') details';
      t += '</div>'
      return t;
    },
    getCategoryTpl: getCategoryTpl,
    getIndexContent: getIndexContent,
    getDetailHeader: getDetailHeader
  };
  
});