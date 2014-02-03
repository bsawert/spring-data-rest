(function () {
  "use strict";
  
  APP.Views.RsvpEditView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click button.save": "save"
    },

    // the constructor
    initialize: function (options) {
      this.rsvp  = options.rsvp;
    },

    save: function (event) {
      // this keeps the form from submitting
      event.stopPropagation();
      event.preventDefault();

      // update our model with values from the form
      this.rsvp.set({
        name: this.$el.find('input[name=name]').val(),
        email: this.$el.find('input[name=email]').val(),
        guests: this.$el.find('select[name=guests]').val(),
        attend: this.$el.find('input[name=attend]').is(':checked')
      });
      // save to the server
      this.rsvp.save();
      // redirect back to the index
      window.location.hash = "rsvps/index";
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#formTemplate').html(), this.rsvp.toJSON()));
      this.$el.find('select[name=guests]').val(this.rsvp.get('guests'));
      this.$el.find('h2').text('Update RSVP');
      return this;
    }
  });
}());