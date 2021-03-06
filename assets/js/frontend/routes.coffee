define ->
  'use strict'

  # The routes for the application. This module returns a function.
  # `match` is match method of the Router
  (match) ->
    match '!/swings', 'swings#index'
    match '!/swings/:club', 'swings#index'
    match '!/stats/:club', 'swings#stats'
    match '!/upload', 'swings#upload'
