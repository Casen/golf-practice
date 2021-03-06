var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['chaplin', 'models/base/collection', 'models/swing'], function(Chaplin, Collection, Swing) {
  'use strict';
  var Swings, _ref;

  return Swings = (function(_super) {
    __extends(Swings, _super);

    function Swings() {
      _ref = Swings.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Swings.prototype.model = Swing;

    Swings.prototype.url = function() {
      return "/api/swings/" + this.club;
    };

    Swings.prototype.initialize = function(options) {
      this.club = options.club;
      return Swings.__super__.initialize.apply(this, arguments);
    };

    return Swings;

  })(Collection);
});
