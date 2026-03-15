$(document).ready(function() {
        // Initialize Select2
        $('.bdgs-t13-pr-select').select2();

        // Reveal Animation Logic
        function checkReveal() {
            var windowHeight = $(window).height();
            $('.reveal').each(function() {
                var elementTop = $(this).offset().top;
                var elementVisible = 80;
                if (elementTop < $(window).scrollTop() + windowHeight - elementVisible) {
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

        checkReveal();

        // Form Submission Logic
        $('#contactForm').on('submit', function(e) {
            e.preventDefault();
            swal({
                title: "Message Sent!",
                text: "Thank you for reaching out. A team member will respond shortly.",
                type: "success",
                confirmButtonColor: "#0F172A"
            });
            this.reset();
            $('.bdgs-t13-pr-select').val('general').trigger('change');
        });
    });