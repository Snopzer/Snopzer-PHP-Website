(function($) {
    "use strict";


    /* === jQuery for page scrolling plugin === */

    /* ======= Navbar for Desktop and Mobile Devices ======= */
    (function() {

        var navbar = $('.navbar-custom'),
            width = Math.max($(window).width(), window.innerWidth),
            mobileTest;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileTest = true;
        }

        navbarSubmenu(width);
        hoverDropdown(width, mobileTest);

        $(window).resize(function() {
            var width = Math.max($(window).width(), window.innerWidth);
            hoverDropdown(width, mobileTest);
        });

        /* ---------------------------------------------- /*
         * Navbar submenu
        /* ---------------------------------------------- */

        function navbarSubmenu(width) {
            if (width > 767) {
                $('.navbar-custom .navbar-nav > li.dropdown').hover(function() {
                    var MenuLeftOffset = $('.dropdown-menu', $(this)).offset().left;
                    var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
                    if (width - MenuLeftOffset > Menu1LevelWidth * 2) {
                        $(this).children('.dropdown-menu').css({
                            'right': 'auto',
                            'left': '0'
                        });
                    } else {
                        $(this).children('.dropdown-menu').css({
                            'right': '0',
                            'left': 'auto'
                        });
                    }
                    if ($('.dropdown', $(this)).length > 0) {
                        var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
                        if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                            $(this).children('.dropdown-menu').addClass('left-side');
                        } else {
                            $(this).children('.dropdown-menu').removeClass('left-side');
                        }
                    }
                });
            }
        }


        /* ---------------------------------------------- /*
         * Navbar hover dropdown on desctop
        /* ---------------------------------------------- */

        function hoverDropdown(width, mobileTest) {
            if ((width > 767) && (mobileTest !== true)) {
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');
                var delay = 0;
                var setTimeoutConst;
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function() {
                        var $this = $(this);
                        setTimeoutConst = setTimeout(function() {
                            $this.addClass('open');
                            $this.find('.dropdown-toggle').addClass('disabled');
                        }, delay);
                    },
                    function() {
                        clearTimeout(setTimeoutConst);
                        $(this).removeClass('open');
                        $(this).find('.dropdown-toggle').removeClass('disabled');
                    });
            } else {
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
                $('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(this).parent().siblings().removeClass('open');
                    $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                    $(this).parent().toggleClass('open');
                });
            }
        }

        /* ---------------------------------------------- /*
         * Navbar collapse on click
        /* ---------------------------------------------- */

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

    }());



/*    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });*/

$('a[href*="#"]:not([href="#"]), a.page-scroll').on('click', function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
});
    /* ======= Sticky Menu  ======= */
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('.main-nav').addClass("sticky");
        } else {
            $('.main-nav').removeClass("sticky");
        }
    });

    /* ======= Full Screen Menu  ======= */
    $('.nav-bars, .tt-nav').on('click', function() {
        $('.nav-bars').toggleClass('navbar-on');
        $('.tt-nav').fadeToggle();
        $('.tt-nav').removeClass('nav-hide');
    });


    /* ======= Parallax  ======= */

    $.stellar({
        responsive: true,
        horizontalScrolling: false,
        verticalOffset: 0
    });


    /* ======= Counter  ======= */
    function countUp() {
        var dataperc;
        $('.statistic-percent').each(function() {
            dataperc = $(this).attr('data-perc'),
                $(this).find('.percentfactor').delay(6000).countTo({
                    from: 0, // number to begin counting
                    to: dataperc,
                    speed: 1000, // ms
                    refreshInterval: 10,
                });
        });
    }
    $('.statistic-percent').waypoint(function() {
        countUp();
    }, {
        offset: '95%',
        triggerOnce: true
    });




    /* === magnificPopup === */
    $(window).load(function() {
        $('.tt-lightbox').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false
                // other options
        });
        /* ======= shuffle js ======= */
        if ($('#portfolio-grid').length > 0) {
            /* initialize shuffle plugin */
            var $grid = $('#portfolio-grid');

            $grid.shuffle({
                itemSelector: '.portfolio-item' // the selector for the items in the grid
            });

            /* reshuffle when user clicks a filter item */
            $('#filter li').on('click', function(e) {
                e.preventDefault();

                // set active class
                $('#filter li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }

    });


    /* === Youtube Video Script === */
    if ($('.player').length > 0) {

        jQuery(".player").mb_YTPlayer();

    }


    /* ======= Textrotator ======= */
    if ($('.rotate').length > 0) {
        $(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 3000 // How many milliseconds until the next word show.
        });
    }

    ! function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + '://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, 'script', 'twitter-wjs');

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'apis.google.com/js/platform.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();



    $("#fade-quote-carousel div.carousel-inner div.item:first").addClass('active ');
    $("#fade-quote-carousel ol.carousel-indicators li:first").addClass('active ');
    $("#boot-slider div.carousel-inner div.item:eq(0)").addClass('active ');
    $('.side-bar > ul').addClass('widget');

})(jQuery);