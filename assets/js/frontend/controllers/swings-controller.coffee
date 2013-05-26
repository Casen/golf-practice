define [
  'controllers/base/controller'
  'collections/swing'
  'views/swings-club-view'
], (Controller, SwingCollection, SwingClubView) ->
  'use strict'

  class SwingsController extends Controller
    index: (params) ->
      @collection = new SwingCollection(params)
      @view = new SwingClubView {@collection}
