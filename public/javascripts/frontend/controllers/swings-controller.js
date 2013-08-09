var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['controllers/base/controller', 'collections/swing', 'collections/stat', 'views/swings-club-view', 'views/stat-view', 'views/upload-view'], function(Controller, SwingCollection, StatCollection, SwingClubView, StatView, UploadView) {
  'use strict';
  var SwingsController, _ref;

  return SwingsController = (function(_super) {
    __extends(SwingsController, _super);

    function SwingsController() {
      _ref = SwingsController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SwingsController.prototype.index = function(params) {
      console.log('swing index method');
      this.collection = new SwingCollection(params);
      return this.view = new SwingClubView({
        collection: this.collection
      });
    };

    SwingsController.prototype.stats = function(params) {
      console.log('stats method');
      this.collection = new StatCollection(params);
      return this.view = new StatView({
        collection: this.collection
      });
    };

    SwingsController.prototype.upload = function(params) {
      return this.view = new UploadView;
    };

    return SwingsController;

  })(Controller);
});
