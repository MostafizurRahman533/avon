
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
  var swiper = new Swiper('.blog-container', {
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






  $('a[data-rel=lightcase]').lightcase({
    // Will be called immediately after lightcase is initialized
    onInit : {
      foo: function() {
        alert('Lightcase process is initialized');
      }
    },
    // Will be called before generating content
    onStart : {
      bar: function() {
        alert('Lightcase process is started');
      }
    },
    // Will be called right before new dimensions get calculated
    onBeforeCalculateDimensions : {
      baz: function() {
        alert('Lightcase process is calculating new dimensions');
      }
    },
    // Will be called right after new dimensions were calculated
    onAfterCalculateDimensions : {
      qux: function() {
        alert('Lightcase process has calculated new dimensions');
      }
    },
    // Will be called right before the content will be displayed
    onBeforeShow : {
      quux: function() {
        alert('Lightcase process will show the content now');
      }
    },
    // Will be called after everything is loaded and visible
    onFinish : {
      corge: function() {
        alert('Lightcase process has finished');
      }
    },
    // Will be called when aborting lightcase
    onClose : {
      grault: function() {
        alert('Lightcase closes now');
      }
    },
    // Will be called when lightcase does the cleanup
    onCleanup : {
      garply: function() {
        alert('Lightcase process is cleaning up');
      }
    }
  });

})(jQuery);



