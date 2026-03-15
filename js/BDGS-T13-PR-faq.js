$(document).ready(function() {
        // Sidebar Navigation Switcher
        $('.bdgs-t13-pr-cat-link').on('click', function(e) {
            e.preventDefault();
            var target = $(this).data('target');
            
            $('.bdgs-t13-pr-cat-link').removeClass('active');
            $(this).addClass('active');
            
            $('.bdgs-t13-pr-faq-content-area').removeClass('active');
            $('#faq-' + target).addClass('active');

            // Scroll to content on mobile
            if($(window).width() < 992) {
                $('html, body').animate({
                    scrollTop: $("#faq-" + target).offset().top - 100
                }, 500);
            }
        });

        // Accordion Interaction
        $('.bdgs-t13-pr-accordion-header').on('click', function() {
            var $parent = $(this).closest('.bdgs-t13-pr-accordion-item');
            var $body = $parent.find('.bdgs-t13-pr-accordion-body');
            
            // Close others
            $('.bdgs-t13-pr-accordion-item').not($parent).removeClass('open').find('.bdgs-t13-pr-accordion-body').slideUp(300);
            
            // Toggle current
            $parent.toggleClass('open');
            $body.slideToggle(300);
        });

        // Global Search Filter
        $('#faq-global-search').on('keyup', function() {
            var value = $(this).val().toLowerCase();
            if(value === "") {
                $('.bdgs-t13-pr-accordion-item').show();
                return;
            }
            
            // Search through all categories
            $('.bdgs-t13-pr-accordion-item').each(function() {
                var text = $(this).text().toLowerCase();
                $(this).toggle(text.indexOf(value) > -1);
            });
        });

        // Sticky Navbar Effect
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                $('.bdgs-t13-pr-navbar').addClass('scrolled');
            } else {
                $('.bdgs-t13-pr-navbar').removeClass('scrolled');
            }
        });
    });