define [
  'dropzone'
  'views/base/view'
  'text!templates/upload.hbs'
], (Dropzone, View, template) ->
  'use strict'

  class UploadView extends View
    # Automatically render after initialize.
    autoRender: true

    className: 'upload'
    region: 'main'

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
      @dropzone = new Dropzone('form.dropzone',{url: form.attr('action')})
      @listenTo @dropzone, 'dragover', @dragEnter
      @listenTo @dropzone, 'dragleave', @dragLeave

    dragEnter: (event) ->
      $(event.currentTarget).parents('.filedrop').addClass('hover')

    dragLeave: (event) ->
      $(event.currentTarget).parents('.filedrop').removeClass('hover')
