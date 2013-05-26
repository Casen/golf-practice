define [
  'controllers/base/controller'
  'collections/swing'
  'collections/stat'
  'views/swings-club-view'
  'views/stat-view'
], (Controller, SwingCollection, StatCollection, SwingClubView, StatView) ->
  'use strict'

  class SwingsController extends Controller

    index: (params) ->
      @collection = new SwingCollection(params)
      @view = new SwingClubView {@collection}

    stats: (params) ->
      @collection = new StatCollection(params)
      @view - new StatView {@collection}

