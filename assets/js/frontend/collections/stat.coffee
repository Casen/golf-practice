define [
  'chaplin',
  'collections/base/collection'
  'models/stat'
], (Chaplin, Collection, Stat) ->
  'use strict'

  class StatCollection extends Collection

    model: Stat
    stat: 'analytics'

    url: ->
      return "/api/stats/#{@club}/#{@stat}"

    initialize: (options) ->
      @club = options.club
      @stat = options.stat if !!options.stat
      super

    generateLineChart: (container, stat) ->
      obj = {}
      obj.element = container
      data =  _.map(@pluck(stat), (val, index) ->
        temp = {}
        temp[stat] = val.toFixed(2)
        temp['index'] = index
        return temp
      )
      obj.data = data
      obj.ykeys = [stat]
      obj.xkey = 'index'
      obj.labels = [stat]
      return obj

