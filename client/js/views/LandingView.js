var LandingView = Backbone.View.extend({
  initialize: function() {
    //this.render(); render already being called from AppView
  },

  template: _.template('<div><h1>HR YEARBOOK</h1></div>'),

  render: function() {
    return this.template();
  }

});
