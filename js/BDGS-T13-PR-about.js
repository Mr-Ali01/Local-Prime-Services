$(document).ready(function() {
        // Reveal Animation Logic
        function checkReveal() {
            var windowHeight = $(window).height();
            $('.reveal').each(function() {
                var elementTop = $(this).offset().top;
                var elementVisible = 100;
                if (elementTop < $(window).scrollTop() + windowHeight - elementVisible) {
                    $(this).addClass('active');
                }
            });
        }

        // Navbar Scroll Effect
        $(window).on('scroll', function() {
            checkReveal();
            if ($(window).scrollTop() > 50) {
                $('.bdgs-t13-pr-navbar').addClass('scrolled');
            } else {
                $('.bdgs-t13-pr-navbar').removeClass('scrolled');
            }
        });

        // Initial checks
        checkReveal();

        // Smooth Internal Links
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        });
    });