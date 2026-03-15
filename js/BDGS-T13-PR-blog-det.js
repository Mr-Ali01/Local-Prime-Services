$(document).ready(function() {
        // Newsletter Submission Simulation
        $('#sideNews').on('submit', function(e) {
            e.preventDefault();
            swal({
                title: "Subscription Confirmed",
                text: "Thank you for joining the Prime Report. Your first insight arrives soon.",
                type: "success",
                confirmButtonColor: "#0F172A"
            });
            this.reset();
        });

        // Navbar Scroll Visual State
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                $('.pl-navbar').addClass('scrolled');
            } else {
                $('.pl-navbar').removeClass('scrolled');
            }
        });
    });