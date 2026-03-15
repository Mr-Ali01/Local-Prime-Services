$(document).ready(function() {
        // Initialize Premium Dropdowns
        $('.select2-dropdown').select2({
            minimumResultsForSearch: Infinity,
            dropdownAutoWidth: true,
            width: '100%'
        });

        // Form Submission Interaction
        $('#unified-match-form').on('submit', function(e) {
            e.preventDefault();
            
            swal({
                title: "Matching Experts...",
                text: "We are auditing local schedules and quality ratings.",
                imageUrl: "https://i.gifer.com/ZZ5H.gif",
                showConfirmButton: false,
                timer: 2500
            }, function() {
                swal({
                    title: "Success!",
                    text: "We've identified 3 top-rated experts for your project. Connection details have been sent to your email.",
                    type: "success",
                    confirmButtonColor: "#0F172A"
                });
            });
        });

        // Navbar Scroll Visual State
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                $('.bdgs-t13-pr-navbar').addClass('scrolled');
            } else {
                $('.bdgs-t13-pr-navbar').removeClass('scrolled');
            }
        });
    });