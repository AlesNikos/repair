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
    if ($(this).scrollTop() > 100 && $(this).width() > 768) {
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

  /* Инициализация Slick слайдера */
  // $('.slider').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   prevArrow: $('.arrows__left'),
  //   nextArrow: $('.arrows__right'),
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });


  /* Инициализация Owl Carousel */
  $('.owl-carousel').owlCarousel({
      loop: true,
      dots: false,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 3,
        }
      }
  });
  
  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('.arrows__left').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  $('.arrows__right').click(function () {
    owl.trigger('next.owl.carousel');
  });


  /* Скрипт для появления анимации при прокрутки страницы */
  // let target = $('.offer__button');
  // let targetPos = target.offset().top;
  // let winHeight = $(window).height();
  // let scrollToElem = targetPos - winHeight;
  // $(window).scroll(function () {
  //   let winScrollTop = $(this).scrollTop();
  //   if (winScrollTop > scrollToElem) {
  //     target.addClass('fadeInUp');
  //   }
  // });

});