(function () {
  "use strict";
  
  APP.Views.RsvpRowView = Backbone.View.extend({
    // the wrapper defaults to div, so only need to set this if you want something else
    // like in this case we are in a table so a tr
    tagName: "tr",
    // functions to fire on events
    events: {
      "click a.delete": "destroy"
    },

    // the constructor
    initialize: function (options) {
      // model is passed through
      this.rsvp  = options.rsvp;
      this.rsvps = options.rsvps;
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#rowTemplate').html(), this.rsvp.toJSON()));
      return this;
    },

    // delete the model
    destroy: function (event) {
      event.preventDefault();
      event.stopPropagation();

      // make a DELETE call to the server with the id of the item
      this.rsvp.destroy();

      this.rsvps.remove(this.rsvp);
      this.$el.remove();
    }
  });
}());
