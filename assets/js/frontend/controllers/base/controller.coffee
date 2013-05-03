define [
  'chaplin'
  'views/site-view'
  'views/sidebar-view'
], (Chaplin, SiteView, SidebarView) ->
  'use strict'

  class Controller extends Chaplin.Controller
    # Place your application-specific controller features here
    beforeAction:
      '.*': ->
        @compose 'site', SiteView
        @sidebarView = new SidebarView() unless @sidebarView?
