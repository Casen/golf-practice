define [
  'chaplin',
  'models/base/model'
], (Chaplin, Model) ->
  'use strict'

  class Stat extends Model

    initialize: (attributes, options) ->
      super
