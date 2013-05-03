define [
  'views/base/collection-view'
  'views/swings-club-item-view'
  'text!templates/swings.hbs'
], (CollectionView, SwingItemView, template) ->
  'use strict'

  class SwingClubView extends CollectionView

    itemView: SwingItemView

    # Automatically render after initialize.
    autoRender: true
    renderItems: false

    className: 'row-fluid swings'
    container: '#main-container'
    listSelector: 'tbody'

    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: template
    template = null

    initialize: ->
      super
      console.log 'init swings'
      @collection.fetch()
