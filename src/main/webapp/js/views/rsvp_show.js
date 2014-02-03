(function () {
  "use strict";
  
  APP.Views.RsvpShowView = Backbone.View.extend({
    // the constructor
    initialize: function (options) {
      this.rsvp = options.rsvp;
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#showTemplate').html(), this.rsvp.toJSON()));
      return this;
    }
  });
}());
