$(document).ready(function() {
        // Animation on Scroll
        function checkScroll() {
            $('.reveal').each(function() {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();
                // Add a small buffer to trigger earlier
                if (windowBottom > elementTop + 50) {
                    $(this).addClass('active');
                }
            });
        }

        $(window).on('scroll', function() {
            checkScroll();
            // Navbar state
            if ($(window).scrollTop() > 80) {
                $('.bdgs-t13-pr-navbar').addClass('scrolled');
            } else {
                $('.bdgs-t13-pr-navbar').removeClass('scrolled');
            }
        });

        // Trigger initial check
        checkScroll();

        // Search action
        $('.bdgs-t13-pr-search-btn').on('click', function() {
            swal({
                title: "Searching for Experts...",
                text: "Connecting to local database",
                imageUrl: "https://i.gifer.com/ZZ5H.gif",
                showConfirmButton: false,
                timer: 2000
            });
                // Redirect after loader
    setTimeout(function () {
        window.location.href = "BDGS-T13-PR-mem-search.html";
        // OR: "core-job-listings.html"
        // OR: "listing.html"
    }, 2000);
            
        });
    });