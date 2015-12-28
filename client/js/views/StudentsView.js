var StudentsView = Backbone.View.extend({

  el: $('#page-content-container'),

  initialize: function() {
    this.render();
  },

  render: function() {
    var prepareForDOM = this.collection.models.map(function(model){
       return new StudentEntryView({model: Student}).render(model);
    }.bind(this))
    this.$el.html(prepareForDOM);
  }

});
