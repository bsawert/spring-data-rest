(function () {
  "use strict";
  
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.RsvpIndexView = Backbone.View.extend({
    // the constructor
    initialize: function (options) {
      // model is passed through
      this.rsvps = options.rsvps;
      this.rsvps.bind('reset', this.addAll, this);
    },

    // populate the html to the dom
    render: function () {
      this.$el.html($('#indexTemplate').html());
      this.addAll();
      return this;
    },

    addAll: function () {
      // clear out the container each time you render index
      this.$el.find('tbody').children().remove();
      _.each(this.rsvps.models, $.proxy(this, 'addOne'));
    },

    addOne: function (rsvp) {
      var view = new APP.Views.RsvpRowView({rsvps: this.rsvps, rsvp: rsvp});
      this.$el.find("tbody").append(view.render().el);
    }
  });
}());
