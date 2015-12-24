var Student = Backbone.Model.extend({

  defaults: {
    id: 0,
    name: '',
    cohort: 0,
    image: '',
    first: '',
    last: '',
    nickname: ''
  },

  initialize: function(){
    this.set('nickname', generateNickname())
  }
  
});

