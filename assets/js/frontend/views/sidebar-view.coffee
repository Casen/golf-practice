define [
  'dropzone'
  'views/base/view'
  'text!templates/sidebar.hbs'
], (Dropzone, View, template) ->
  'use strict'

  class SidebarView extends View
    # Automatically render after initialize.
    autoRender: true

    className: 'sidebar'
    region: 'sidebar'

    # Save the template string in a prototype property.
    # This is overwritten with the compiled template function.
    # In the end you might want to used precompiled templates.
    template: template
    template = null

    initialize: ->
      super

    attach: ->
      super
      form = $('form.dropzone')
      form.dropzone({url: form.attr('action')})
