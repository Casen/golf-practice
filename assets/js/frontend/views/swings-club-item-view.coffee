define [
  'views/base/view'
  'text!templates/swings-item.hbs'
], (View, template) ->
  'use strict'

  class SwingsClubItemView extends View

    # Automatically render after initialize.
    autoRender: false

    container: '.swings table tbody'
    className: 'swing-item'
    tagName: 'tr'

    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: template
    template = null

    initialize: ->
      super
