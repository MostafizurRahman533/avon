
(function($){
    'use strict';
    	// mobile menu responsive
	$(document).on('click','.mobile-bar',function(){
        $("ul").toggleClass("close");
            // $(".main-menu").toggleClass("open");
            // $(".overlay").addClass("active");
        });

        // swiper-service slider js 
        var swiper = new Swiper('.service-container', {
          slidesPerView: 1,
          spaceBetween: 10,
          // init: false,
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true,
          // },
          navigation: {
              nextEl: '.arrow-next',
              prevEl: '.arrow-prev',
            },
          breakpoints: {
            575: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            2000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }
        });

          // swiper-process slider js 
          var swiper = new Swiper('.testimonial-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            // init: false,
            // pagination: {
            //   el: '.swiper-pagination',
            //   clickable: true,
            // },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            breakpoints: {
              575: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              2000: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }
          });



})(jQuery);