var Students = Backbone.Collection.extend({
  model: Student,

  initialize: function (options) {
    // console.log("options are", options.info);
    this.url = 'https://hr-yearbook.herokuapp.com/api/' + options.info;
    console.log(this.url)
    this.populateCohort();
    this.listenTo(this.model, 'click', this.model.handleClick);
  },
  populateCohort: function() {
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
    this.fetch({
      success: function(){
        // console.log('successful fetch, ', data);
        var studentCollection = new StudentsView({collection: this, model: Student});
      }.bind(this),
      error: function(err){
        console.log('error, ', err);
      }
    })
  }
});
