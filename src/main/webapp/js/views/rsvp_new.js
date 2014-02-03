(function () {
  "use strict";
  
  APP.Views.RsvpNewView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click button.save": "save"
    },

    // the constructor
    initialize: function (options) {
      this.rsvp  = options.rsvp;
      this.rsvps = options.rsvps;
      this.rsvp.bind('invalid', this.showErrors, this);
    },

    showErrors: function (rsvp, errors) {
      this.$el.find('.error').removeClass('error');
      this.$el.find('.alert').html(_.values(errors).join('<br>')).show();
      // highlight the fields with errors
      _.each(_.keys(errors), _.bind(function (key) {
        this.$el.find('*[name=' + key + ']').parent().addClass('error');
      }, this));
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      // update our model with values from the form
      this.rsvp.set({
        name: this.$el.find('input[name=name]').val(),
        email: this.$el.find('input[name=email]').val(),
        guests: this.$el.find('select[name=guests]').val(),
        attend: this.$el.find('input[name=attend]').is(':checked'),
      });
      if (this.rsvp.isValid()){
        // add it to the collection
        this.rsvps.add(this.rsvp);
        // save to the server
        this.rsvp.save();
        // redirect back to the index
        window.location.hash = "rsvps/index";
      }
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#formTemplate').html(), this.rsvp.toJSON()));
      this.$el.find('h2').text('New RSVP');
      return this;
    }
  });
}());
