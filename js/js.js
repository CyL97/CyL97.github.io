$('.menu').click(function (e) {
  var _this = $(this);
  if ($('.nav ul').is(':hidden')) {
    $('.nav ul').show();
    _this.addClass('menucur');
  } else {
    $('.nav ul').hide();
    _this.removeClass('menucur');
  }
});
