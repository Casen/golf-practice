var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['controllers/base/controller', 'models/hello-world', 'views/hello-world-view'], function(Controller, HelloWorld, HelloWorldView) {
  'use strict';
  var HelloController, _ref;

  return HelloController = (function(_super) {
    __extends(HelloController, _super);

    function HelloController() {
      _ref = HelloController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HelloController.prototype.show = function(params) {
      this.model = new HelloWorld();
      return this.view = new HelloWorldView({
        model: this.model
      });
    };

    return HelloController;

  })(Controller);
});
