var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['chaplin', 'views/site-view', 'views/sidebar-view'], function(Chaplin, SiteView, SidebarView) {
  'use strict';
  var Controller, _ref;

  return Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      _ref = Controller.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Controller.prototype.beforeAction = {
      '.*': function() {
        this.compose('site', SiteView);
        if (this.sidebarView == null) {
          return this.sidebarView = new SidebarView();
        }
      }
    };

    return Controller;

  })(Chaplin.Controller);
});
