
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

  // isotop activation filter=

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
})(jQuery);



/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 10 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -10 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})