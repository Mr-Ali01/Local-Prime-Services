$(document).ready(function() {
        // Smooth scroll for explore button
        $('.bdgs-t13-pr-btn-explore').on('click', function(event) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $('#pricing-section').offset().top - 80
            }, 1000);
        });

        // Pricing Toggle Script
        $('#pricing-toggle').on('change', function() {
            const isAnnual = $(this).is(':checked');
            if(isAnnual) {
                $('#p-solo').text('24');
                $('#p-pro').text('64');
                $('#p-biz').text('159');
            } else {
                $('#p-solo').text('29');
                $('#p-pro').text('79');
                $('#p-biz').text('199');
            }
        });

        // Reveal Logic (Production Standard)
        function checkReveal() {
            var windowHeight = $(window).height();
            $('.reveal').each(function() {
                var elementTop = $(this).offset().top;
                if (elementTop < $(window).scrollTop() + windowHeight - 80) {
                    $(this).addClass('active');
                }
            });
        }

        $(window).on('scroll', checkReveal);
        
        // Navbar Scrolled Logic
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                $('.bdgs-t13-pr-navbar').addClass('scrolled');
            } else {
                $('.bdgs-t13-pr-navbar').removeClass('scrolled');
            }
        });

        // Initial check
        checkReveal();

        // CTA Intercept
        $('button').on('click', function() {
            const text = $(this).text().toLowerCase();
            if(text.includes('create') || text.includes('join') || text.includes('apply')) {
                swal({
                    title: "Opening Application",
                    text: "Connecting you to the verified professional portal...",
                    imageUrl: "https://i.gifer.com/ZZ5H.gif",
                    showConfirmButton: false,
                    timer: 2000
                });
                 setTimeout(function () {
        window.location.href = "BDGS-T13-PR-login-signup.html";
        // OR: "core-job-listings.html"
        // OR: "listing.html"
    }, 2000);
            }
        });
    });