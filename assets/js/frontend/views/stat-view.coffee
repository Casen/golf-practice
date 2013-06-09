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
      @collection.fetch
        success: =>
          @render()
      super

    attach: ->
      super
      accuracyGraphObj = @collection.generateLineChart('accuracy-chart', 'average_accuracy')
      accuracyGraphObj.ymin = 60
      accuracyGraphObj.yLabelFormat = (y) -> return y.toFixed(2).toString()
      Morris.Line accuracyGraphObj

      missGraphObj = @collection.generateDonutChart('miss-chart', ['miss_left_percentage', 'straight_percentage', 'miss_right_percentage'])
      Morris.Donut missGraphObj

