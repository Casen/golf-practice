var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['views/base/view', 'text!templates/hello-world.hbs'], function(View, template) {
  'use strict';
  var HelloWorldView, _ref;

  return HelloWorldView = (function(_super) {
    __extends(HelloWorldView, _super);

    function HelloWorldView() {
      _ref = HelloWorldView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HelloWorldView.prototype.autoRender = true;

    HelloWorldView.prototype.className = 'hello-world';

    HelloWorldView.prototype.region = 'main';

    HelloWorldView.prototype.template = template;

    template = null;

    HelloWorldView.prototype.initialize = function() {
      HelloWorldView.__super__.initialize.apply(this, arguments);
      return console.log('init hellow world');
    };

    return HelloWorldView;

  })(View);
});
