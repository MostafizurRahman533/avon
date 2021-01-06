  // Gallery Masonary

    var $gridTwo = $(".masonary-wrapper");
    var filterFns = {};
    $gridTwo.isotope({
      itemSelector: '.masonary-item',
      masonry: {
        columnWidth: 0,
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
  