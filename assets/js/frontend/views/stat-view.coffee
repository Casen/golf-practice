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
      accuracyGraphObj.ymin = 70
      accuracyGraphObj.yLabelFormat = (y) -> return y.toFixed(2).toString()
      Morris.Line accuracyGraphObj

      missGraphObj = @collection.generateDonutChart('miss-chart', ['miss_left_percentage', 'straight_percentage', 'miss_right_percentage'])
      Morris.Donut missGraphObj

      straightGraphObj = @collection.generateLineChart('straight-chart', 'straight_percentage')
      straightGraphObj.yLabelFormat = (y) -> return y.toFixed(2).toString()
      Morris.Line straightGraphObj

      carryGraphObj = @collection.generateLineChart('carry-chart', 'average_carry')
      carryGraphObj.yLabelFormat = (y) -> return y.toFixed(2).toString()
      Morris.Line carryGraphObj

      dispersionGraphObj = @collection.generateLineChart('dispersion-chart', 'dispersion_radius')
      dispersionGraphObj.yLabelFormat = (y) -> return y.toFixed(2).toString()
      Morris.Line dispersionGraphObj

      distanceGraphObj = @collection.generateLineChart('distance-chart', 'average_distance')
      distanceGraphObj.yLabelFormat = (y) -> return y.toFixed(2).toString()
      Morris.Line distanceGraphObj

      speedGraphObj = @collection.generateLineChart('club-speed-chart', 'average_club_head_speed')
      speedGraphObj.yLabelFormat = (y) -> return y.toFixed(2).toString()
      Morris.Line speedGraphObj
