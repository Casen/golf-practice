define [
  'chaplin',
  'collections/base/collection'
  'models/stat'
], (Chaplin, Collection, Stat) ->
  'use strict'

  class StatCollection extends Collection

    model: Swing
    stat: 'analytics'

    url: ->
      return "/api/stats/#{@club}/#{@stat}"

    initialize: (options) ->
      @club = options.club
      @stat = options.stat if !!options.stat
      super
