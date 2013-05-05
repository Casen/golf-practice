var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['controllers/base/controller', 'models/swings', 'views/swings-club-view'], function(Controller, SwingCollection, SwingClubView) {
  'use strict';
  var SwingsController, _ref;

  return SwingsController = (function(_super) {
    __extends(SwingsController, _super);

    function SwingsController() {
      _ref = SwingsController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SwingsController.prototype.index = function(params) {
      console.log(params);
      this.collection = new SwingCollection(params);
      return this.view = new SwingClubView({
        collection: this.collection
      });
    };

    return SwingsController;

  })(Controller);
});
