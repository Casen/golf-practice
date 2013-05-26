define [
  'chaplin',
  'collections/base/collection'
  'models/swing'
], (Chaplin, Collection, Swing) ->
  'use strict'

  class Swings extends Collection

    model: Swing

    url: ->
      return "/api/swings/#{@club}"

    initialize: (options) ->
      @club = options.club
      super
