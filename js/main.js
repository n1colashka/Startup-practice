$(document).ready(function(){
  $(".about-us__slider").owlCarousel({
        loop:true, //Зацикливаем слайдер
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            500:{
                items:2
            },
            870:{
                items:3
          },
            1100:{
                items:4
            }
        }
    });

    $(".clients-slider").owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картино если выводите больше 1
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });

    $('.burger-menu').on('click', function(){
        $('.header__nav ul').slideToggle();
    })
});