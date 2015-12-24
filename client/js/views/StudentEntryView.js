var StudentEntryView = Backbone.View.extend({

  template: _.template('<div class="pictureHolder"><img class="picture" src="<%=image%>"></img><h4 class="name"><%=name%></h4><h5 class="cohort">cohort: <%=cohort%></h5><h5 class="nickname">call me: <%=nickname%></h5></div>'),

  render: function(model){
    return this.template(model.attributes);
  }
});
