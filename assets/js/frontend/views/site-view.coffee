define [
  'views/base/view'
  'text!templates/site.hbs'
], (View, template) ->
  'use strict'

  class SiteView extends View
    container: 'body'
    id: 'site-container'
    className: 'container-fluid'
    regions:
      '#main-container': 'main'
    template: template
    template = null
