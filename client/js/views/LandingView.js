var LandingView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  template: _.template('<h1>Don\'t call us. We\'ll callback you!</h1>'),

  render: function() {
    return this.template();
  }

});
