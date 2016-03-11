$ = require('jquery')
Backbone = require('backbone')

class HelloView extends Backbone.View
  el: $('.app')
  render: ->
    $(@el).append('<p>Hello World</p>')

module.exports = HelloView
