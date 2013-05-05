define [
  'views/base/view'
  'views/sidebar-view'
  'text!templates/site.hbs'
], (View, SidebarView, template) ->
  'use strict'

  class SiteView extends View
    container: 'body'
    id: 'site-container'
    className: 'container-fluid'
    regions:
      '#main-container': 'main'
      '#sidebar-container': 'sidebar'
    template: template
    template = null

    initialize: ->
      super

    attach: ->
      super
      @subview 'sidebar', new SidebarView()

