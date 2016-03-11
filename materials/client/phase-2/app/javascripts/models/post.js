App.Models = App.Models || {};

(function() {
  'use strict';

  App.Models.Post = Backbone.Model.extend({
    urlRoot: 'http://jsonplaceholder.typicode.com/posts',

    validation: {
      body: {
        required: true,
        minLength: 200,
        maxLength: 5000
      },
      title: {
        required: true,
        maxLength: 100
      },
      date: function(value) {
        var date = Date.parse(value);

        if (!date) return 'Date is required';
        if (date < Date.now()) return 'Date must be at future';
      }
    }
  });

})();
