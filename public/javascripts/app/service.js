define(['jade', 'zepto'], function(jade, $) {

  function getTplFunction(type, cb) {
    var cacheMap = {
      'contacts': '/contacts.jade',
      'detail': '/detail.jade',
      'edit': '/edit.jade'
    };

    if (typeof cacheMap[type] == 'function') {
      cb(cacheMap[type]);
    } else {
      $.get(cacheMap[type], function(tpl, status) {
        var tplFn = jade.compile(tpl, {});
        cacheMap[type] = tplFn;
        cb(tplFn);
      });
    }
  }

  function getContacts(cb) {
    $.getJSON('/data/list', cb);
  }

  function getContactsContent(cb) {
    getTplFunction('contacts', function(tplFn) {

      getContacts(function(data) {
        cb(tplFn({data: data}));
      });

    });
  }

  var currentInfo = null;

  function getInfo(id, cb) {
    if (currentInfo && currentInfo.id == id) {
      return cb(currentInfo);
    }
    $.getJSON('/data/detail/' + id, cb);
  }

  function getDetailContent(id, cb) {
    getTplFunction('detail', function(tplFn) {

      getInfo(id, function(data) {
        currentInfo = data;
        cb(tplFn({data: data}));
      });

    });
  }

  function getEditContent(id, cb) {
    getTplFunction('edit', function(tplFn) {

      getInfo(id, function(data) {
        currentInfo = data;
        cb(tplFn({data: data}));
      });

    });
  }

  function saveDetailInfo(data, cb) {
    $.post('/data/updateDetail', {}, function() {
      if (currentInfo && currentInfo.id == data.id) {
        currentInfo.name = data.name;
        currentInfo.number = data.number;
      }
      cb(data);
    });
  }

  return {

    saveDetailInfo: saveDetailInfo,

    getContactsContent: getContactsContent,
    getDetailContent: getDetailContent,
    getEditContent: getEditContent

  };
  
});