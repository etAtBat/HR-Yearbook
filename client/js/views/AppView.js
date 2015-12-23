var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', function() {
      console.log('Hit landing Route')
    }.bind(this));

    console.log('appview init options', options)

    options.router.on('route:cohortHandler', function(data) {
      console.log('Hit cohort id route:', data)
      var urlFragment = "students?cohort=" + data;
      this.renderCohort(urlFragment);
    }.bind(this));

    options.router.on('route:studentNameHandler', function(data) {
      console.log('Hit students name route:', data)
      var urlFragment = "students?name=" + data;
      this.renderCohort(urlFragment);
    }.bind(this));

    options.router.on('route:studentIDHandler', function(data) {
      console.log('Hit students id route:', data)
      var urlFragment = "students?id=" + data;
      this.renderCohort(urlFragment);
    }.bind(this));

    options.router.on('route:studentCohortHandler', function(data) {
      console.log('Hit students cohort route:', data)
      var urlFragment = "students?cohort=" + data;
      this.renderCohort(urlFragment);
    }.bind(this));

    options.router.on('route:studentImageHandler', function(data) {
      console.log('Hit students image route:', data)
      var urlFragment = "students?image=" + data;
      this.renderCohort(urlFragment);
    }.bind(this));

    // this.renderLanding()
    // this.renderCohort();
  },

  renderCohort: function(fragment) {
    var newCohort = new Students({model: Students, info: fragment});
  },

  renderLanding: function() {
   // $('#page-content-container').html(new LandingView().render()); zach had page content continer here  
    $('#info-window-container').html(new LandingView().render());   
  }
})
