var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['dropzone', 'views/base/view', 'text!templates/sidebar.hbs'], function(Dropzone, View, template) {
  'use strict';
  var SidebarView, _ref;

  return SidebarView = (function(_super) {
    __extends(SidebarView, _super);

    function SidebarView() {
      _ref = SidebarView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SidebarView.prototype.autoRender = true;

    SidebarView.prototype.className = 'sidebar';

    SidebarView.prototype.region = 'sidebar';

    SidebarView.prototype.template = template;

    template = null;

    SidebarView.prototype.initialize = function() {
      return SidebarView.__super__.initialize.apply(this, arguments);
    };

    SidebarView.prototype.attach = function() {
      var form;

      SidebarView.__super__.attach.apply(this, arguments);
      form = $('form.dropzone');
      return form.dropzone({
        url: form.attr('action')
      });
    };

    return SidebarView;

  })(View);
});
