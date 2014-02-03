(function () {
  "use strict";
  
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Routers.RsvpRouter = Backbone.Router.extend({
    routes: {
      "rsvp/new": "create",
      "rsvps/index": "index",
      "rsvp/:id/edit": "edit",
      "rsvp/:id/view": "show"
    },

    initialize: function (options) {
      this.rsvps = options.rsvps;
      // this is debug only to demonstrate how the backbone collection / models work
      this.rsvps.bind('reset', this.index, this);
      this.rsvps.bind('add', this.index, this);
      this.rsvps.bind('remove', this.index, this);
      this.rsvps.bind('change', this.index, this);
      this.index();
    },

    updateDebug: function () {
      $('#output').text(JSON.stringify(this.rsvps.toJSON(), null, 4));
      // .animate({scrollTop: $('#offset').scrollHeight}, 1000);
    },

    create: function () {
      this.currentView = new APP.Views.RsvpNewView({rsvps: this.rsvps, rsvp: new APP.Models.RsvpModel()});
      $('#primary-content').html(this.currentView.render().el);
    },

    edit: function (id) {
      var rsvp = this.rsvps.get(id);
      this.currentView = new APP.Views.RsvpEditView({rsvp: rsvp});
      $('#primary-content').html(this.currentView.render().el);
    },

    show: function (id) {
      var rsvp = this.rsvps.get(id);
      this.currentView = new APP.Views.RsvpShowView({rsvp: rsvp});
      $('#primary-content').html(this.currentView.render().el);
    },

    index: function () {
      this.rsvps.fetch({success: function(collection, response, options) {
        console.log(collection, response, options);
        var currentView = new APP.Views.RsvpIndexView({rsvps: collection});
        $('#primary-content').html(currentView.render().el);
      }});
      this.updateDebug();
    }
  });
}());
