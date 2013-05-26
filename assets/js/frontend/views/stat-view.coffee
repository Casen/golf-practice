define [
  'views/base/view'
  'text!templates/stat.hbs'
], (View, template) ->
  'use strict'

  class StatView extends View

    # Automatically render after initialize.
    autoRender: false

    container: '#main-container'
    className: 'stat'

    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: template
    template = null

    initialize: ->
      super
