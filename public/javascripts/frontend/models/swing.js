var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['chaplin', 'models/base/model'], function(Chaplin, Model) {
  'use strict';
  var Swing, _ref;

  return Swing = (function(_super) {
    __extends(Swing, _super);

    function Swing() {
      _ref = Swing.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Swing.prototype.initialize = function(attributes, options) {
      return Swing.__super__.initialize.apply(this, arguments);
    };

    return Swing;

  })(Model);
});
