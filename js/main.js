$(function() {
    "use strict";

    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    //navbarFixed();

    $('#creatorCarousel').on('slide.bs.carousel', function(e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 6;
        var totalItems = $('#creatorCarousel .carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('#creatorCarousel .carousel-item').eq(i).appendTo('#creatorCarousel .carousel-inner').animate("fast");
                } else {
                    $('#creatorCarousel .carousel-item').eq(0).appendTo('#creatorCarousel .carousel-inner').animate("fast");
                }
            }
        }
    });

    $('#genreCarousel.carousel .carousel-item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 3; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });


    $('select').niceSelect();

    /*-------------------------------------------------------------------------------
      testimonial slider
    -------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
        $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }

});