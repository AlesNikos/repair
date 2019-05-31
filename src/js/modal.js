$(document).ready(function() {
  $('#button').on('click', function(event) {
    event.preventDefault();
    $('.modal').addClass('modal_active');
  })

  $('#close').on('click', function(event) {
    event.preventDefault();
    $('.modal').removeClass('modal_active');
  });

  /* Прокрутка страницы вверх при помощи кнопки */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll_up').fadeIn();
    } else {
      $('.scroll_up').fadeOut();
    }
  });

  $('.scroll_up').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});