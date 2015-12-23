var StudentEntryView = Backbone.View.extend({

  template: _.template('<img src="<%=image%>"></img><h4><%=name%></h4><h5>cohort: <%=cohort%></h5>'),

  render: function(model){
    return this.template(model.attributes);
  }
});
