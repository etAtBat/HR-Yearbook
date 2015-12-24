$('#page-content-container').on('click', 'img.picture', function(){
  var lastChild = $(this).parent().children(':last');
  lastChild.css('display') === 'none' ? lastChild.css('display', 'block') : lastChild.css('display', 'none');
});
