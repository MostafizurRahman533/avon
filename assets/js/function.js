
(function($){
    'use strict';
    	// mobile menu responsive
      $(document).on('click','.mobile-bar',function(){
        $("ul").toggleClass("close");
            $(".main-menu").toggleClass("open");
            $(".overlay").addClass("active");
            $("body").addClass("overflow");
        });

        // overlay remove
        $('.overlay').on('click', function(){
          $('body,ul,.mobile-bar').removeClass('close');
          $('body,ul').removeClass('open');
          $('body,ul,.overlay').removeClass('active');
          $('body').removeClass('overflow');
        });

        //search area
        $(document).on('click','.search-image',function(){
          $(".search-area").addClass("open");
          $("body").addClass("scroll-lock");
        });
        
        $(document).on('click','.search-overlay',function(){
          $(".search-area").removeClass("open");
          $("body").removeClass("scroll-lock");
        });

        $(document).on('click','.cross-overlay',function(){
          $(".search-area").removeClass("open");
          $("body").removeClass("scroll-lock");
        });

      // scroll up start here
      $(function(){
        $(window).scroll(function(){
          if ($(this).scrollTop() > 300) {
            $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
          } else {
            $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'});
          }
        });
        //Click event to scroll to top
        $('.scrollToTop').on('click', function(){
          $('html, body').animate({scrollTop : 0},500);
          return false;
        });
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
              nextEl: '.swiper-button-befor',
              prevEl: '.swiper-button-after',
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
            // 2000: {
            //   slidesPerView: 3,
            //   spaceBetween: 30,
            // },
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

 // swiper-blog slider js 
 var swiper = new Swiper('.blog-container', {
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
  var swiper = new Swiper('.recent-container', {
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

  
  // isotop activation

  $(document).ready(function(){
      var $gridTwo = $(".masonary-wrapper");
      var filterFns = {};
      $gridTwo.isotope({
        itemSelector: '.masonary-item',
        masonry: {
          columnWidth: 0,
          columnHeight: 200,
        }
      });
      // bind filter button click
  
      $('ul.filter-2').on('click', 'li', function () {
        var filterValueTwo = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValueTwo = filterFns[filterValueTwo] || filterValueTwo;
        $gridTwo.isotope({
          filter: filterValueTwo
        });
      });
      // change is-checked class on buttons
      $('.filter-2').each(function (i, buttonGroup) {
        var $buttonGroupTwo = $(buttonGroup);
        $buttonGroupTwo.on('click', 'li', function () {
          $buttonGroupTwo.find('.active').removeClass('active');
          $(this).addClass('active');
        });
      }); 
    });

    // blog-slider

    var swiper = new Swiper('.blog-page-container', {
      cssMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });

})(jQuery);

