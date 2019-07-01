$(document).ready(function() {
  // $('#button').on('click', function(event) {
  //   event.preventDefault();
  //   $('.modal').addClass('modal_active');
  // })

  $('.card__link').on('click', function (event) {
    event.preventDefault();
    $('.modal').addClass('modal_active');
    let target = $(this).attr('data-target');
    $('.modal-content').load(target + '.html');
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

  /* Скрипт для появления карты при проктутке до нее */
  var target = $('.footer');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;

  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
      $('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acf9e7a566ec11e013d5a18042a7a0d7f86d60ec6e78ad23fa7a085d1807d7f94&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
      console.log('докрутили');
      $(window).unbind('scroll');
    }
  });

  /* Валидация форм */
  $('#offer-form').validate({
    rules: {
      offer_username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      offer_phone: "required"
    }, 
    messages: {
      offer_username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Не менее {0} символов!"),
        maxlength: jQuery.validator.format("Не более {0} символов!")
      },
      offer_phone: "Заполните поле"
    },
    errorClass: "invalid",
    errorElement: "div",
    /* Иницализируем отправку формы (форма не отправляется с пустыми инпутами) */
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "mailer/smart-offer.php",
        data: $(form).serialize(),
        success: function () {
          $(form).find("input").val("");
          // $('.modal').removeClass('modal_active');
          // $('.modal-thanks').fadeIn();
          $("form").trigger("reset");
        }
      });
      return false;
    }  
  });

  const validationParams = {
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      user_phone: "required",
      user_email: {
        required: true,
        email: true
      }
    },
    messages: {
      user_name: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Не менее {0} символов!"),
        maxlength: jQuery.validator.format("Не более {0} символов!")
      },
      user_phone: "Заполните поле",
      user_email: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    errorClass: "invalid",
    errorElement: "div",
    /* Иницализируем отправку формы (форма не отправляется с пустыми инпутами) */
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(form).serialize(),
        success: function () {
          $(form).find("input").val("");
          // $('.modal').removeClass('modal_active');
          // $('.modal-thanks').fadeIn();
          $("form").trigger("reset");
        }
      });
      return false;
    }
  };

  $('#brif-form').validate(validationParams);
  $('#modal-form').validate(validationParams);
  
  

  /* Маска для телефона */
  $('.phone').mask('+7 (999) 999-99-99');

});