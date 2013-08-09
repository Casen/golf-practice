var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['views/base/collection-view', 'views/swings-club-item-view', 'text!templates/swings.hbs'], function(CollectionView, SwingItemView, template) {
  'use strict';
  var SwingClubView, _ref;

  return SwingClubView = (function(_super) {
    __extends(SwingClubView, _super);

    function SwingClubView() {
      _ref = SwingClubView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SwingClubView.prototype.itemView = SwingItemView;

    SwingClubView.prototype.autoRender = true;

    SwingClubView.prototype.renderItems = false;

    SwingClubView.prototype.className = 'row-fluid swings';

    SwingClubView.prototype.container = '#main-container';

    SwingClubView.prototype.listSelector = 'tbody';

    SwingClubView.prototype.template = template;

    template = null;

    SwingClubView.prototype.initialize = function() {
      SwingClubView.__super__.initialize.apply(this, arguments);
      return this.collection.fetch();
    };

    return SwingClubView;

  })(CollectionView);
});
