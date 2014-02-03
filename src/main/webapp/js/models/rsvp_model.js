(function () {
  "use strict";

  APP.Models.RsvpModel = Backbone.Model.extend({
    // you can set any defaults you would like here
    defaults: {
      name: "",
      email: "",
      guests: 0,
      attend: true
    },

    parse: function(response, options) {
      if (response !== null) {
        delete response.links;
      }
      return response;
    },

    validate: function (attrs) {
      var errors = {};
      if (attrs.name === '') {
        errors.name = "Name is required";
      }
      if (attrs.email === '') {
        errors.email = "Email is required";
      }

      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  APP.Collections.RsvpCollection = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: APP.Models.RsvpModel,
    url: 'http://localhost:8080/spring-data-rest-1.0/api/rsvps',
    
    parse: function(response) {
      return response.content;
    }
  });
}());
