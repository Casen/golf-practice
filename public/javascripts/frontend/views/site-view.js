var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['views/base/view', 'views/sidebar-view', 'text!templates/site.hbs'], function(View, SidebarView, template) {
  'use strict';
  var SiteView, _ref;

  return SiteView = (function(_super) {
    __extends(SiteView, _super);

    function SiteView() {
      _ref = SiteView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SiteView.prototype.container = 'body';

    SiteView.prototype.id = 'site-container';

    SiteView.prototype.className = 'container-fluid';

    SiteView.prototype.regions = {
      '#main-container': 'main',
      '#sidebar-container': 'sidebar'
    };

    SiteView.prototype.template = template;

    template = null;

    SiteView.prototype.initialize = function() {
      return SiteView.__super__.initialize.apply(this, arguments);
    };

    SiteView.prototype.attach = function() {
      SiteView.__super__.attach.apply(this, arguments);
      return this.subview('sidebar', new SidebarView());
    };

    return SiteView;

  })(View);
});
