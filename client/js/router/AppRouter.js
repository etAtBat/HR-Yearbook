// http://backbonejs.org/#Router
var AppRouter = Backbone.Router.extend({

  routes: {
    '':                                     'landing',
    'cohort/:id':                     'cohortHandler',
    'students/':                     'studentHandler',
    'students/name=:name':       'studentNameHandler',
    'students/id=:id':             'studentIDHandler',
    'students/cohort=:cohort': 'studentCohortHandler',
    'students/image=:image':    'studentImageHandler'
  },

  ///TODO: what are the below functions even for???///
  landing: function() {
    //things to do at /api/
  },

  students: function(){
    //things to do once students/:query is navigated to
  },

  cohortHandler: function(){
    //things to do once cohort/:id route is navigated to
  },

  studentNameHandler: function(){
    //things to do once students/name= is navigated to
  },

  studentIDHandler: function(){
    //things to do once students/id= is navigated to
  },

  studentCohortHandler: function(){
    //things to do once students/cohort= is navigated to
  },

  studentImageHandler: function(){
    //things to do once students/image= is navigated to
  }

});
