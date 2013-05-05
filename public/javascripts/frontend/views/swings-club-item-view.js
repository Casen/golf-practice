var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['views/base/view', 'text!templates/swings-item.hbs'], function(View, template) {
  'use strict';
  var SwingsClubItemView, _ref;

  return SwingsClubItemView = (function(_super) {
    __extends(SwingsClubItemView, _super);

    function SwingsClubItemView() {
      _ref = SwingsClubItemView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SwingsClubItemView.prototype.autoRender = false;

    SwingsClubItemView.prototype.container = '.swings table tbody';

    SwingsClubItemView.prototype.className = 'swing-item';

    SwingsClubItemView.prototype.tagName = 'tr';

    SwingsClubItemView.prototype.template = template;

    template = null;

    SwingsClubItemView.prototype.initialize = function() {
      return SwingsClubItemView.__super__.initialize.apply(this, arguments);
    };

    return SwingsClubItemView;

  })(View);
});
