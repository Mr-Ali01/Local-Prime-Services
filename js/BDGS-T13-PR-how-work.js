$(document).ready(function() {
        // Reveal Animation Logic
        function checkReveal() {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementVisible = 100;

            $('.reveal, .reveal-left, .reveal-right').each(function() {
                var elementTop = $(this).offset().top;
                if (elementTop < scrollTop + windowHeight - elementVisible) {
                    $(this).addClass('active');
                }
            });
        }

        $(window).on('scroll', function() {
            checkReveal();
            // Navbar Scrolled State
            if ($(window).scrollTop() > 50) {
                $('.bdgs-t13-pr-navbar').addClass('scrolled');
            } else {
                $('.bdgs-t13-pr-navbar').removeClass('scrolled');
            }
        });

        // Initial checks
        checkReveal();
    });