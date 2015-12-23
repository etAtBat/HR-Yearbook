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

  template: _.template('<img src="<%=image%>"></img><h4><%=name%></h4><h5>cohort: <%=cohort%></h5>'),

  render: function(){
    return this.template(this.attributes);
  }

});

