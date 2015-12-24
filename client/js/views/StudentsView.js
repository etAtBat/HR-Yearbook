var StudentsView = Backbone.View.extend({

  el: $('#page-content-container'),

  initialize: function() {
    // console.log('the other side ',this.collection);
    this.render();
  },

  render: function() {
    var prepareForDOM = this.collection.models.map(function(model){
       return new StudentEntryView({model: Student}).render(model);
    }.bind(this))
    debugger
    this.$el.html(prepareForDOM.join(''));
  }

});
