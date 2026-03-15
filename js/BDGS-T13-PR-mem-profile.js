function triggerMessage() {
        $('html, body').animate({ scrollTop: $("#contact-member-form").offset().top - 150 }, 800);
        $('#contact-member-form input:first').focus();
    }

    $(document).ready(function() {
        // Tab Switching Logic
        $('.pl-tab-item').on('click', function() {
            const target = $(this).data('target');
            $('.pl-tab-item').removeClass('active');
            $(this).addClass('active');
            
            $('.tab-pane').removeClass('active');
            $('#pane-' + target).addClass('active');
        });

        // Phone Reveal
        $('#reveal-phone-top, #phone-display').on('click', function(e) {
            e.preventDefault();
            $('#phone-display').html('<a href="tel:+17135550198">+1 (713) 555-0198</a>').css('color', '#38BDF8');
            swal({ title: "Phone Number Revealed", type: "success", timer: 1000, showConfirmButton: false });
        });

        // Form Submit
        $('#contact-member-form').on('submit', function(e) {
            e.preventDefault();
            swal({ title: "Message Sent", text: "Inquiry transmitted to Marcus Sterling.", type: "success", confirmButtonColor: "#0F172A" });
            this.reset();
        });
    });