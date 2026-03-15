// Global function to toggle between Login and Signup
    function toggleAuthView(target) {
        $('.bdgs-t13-mo-auth-form').removeClass('active');
        if(target === 'login') {
            $('#bdgs-t13-mo-view-login').addClass('active');
        } else {
            $('#bdgs-t13-mo-view-signup').addClass('active');
        }
    }

    $(document).ready(function() {
        // Toggle Password Visibility
        $('.bdgs-t13-mo-toggle-pass').on('click', function() {
            const input = $(this).siblings('input');
            const type = input.attr('type') === 'password' ? 'text' : 'password';
            input.attr('type', type);
            $(this).toggleClass('fa-eye fa-eye-slash');
        });

        // Password Strength Logic for Signup
        $('#signup-pass').on('input', function() {
            const val = $(this).val();
            let score = 0;
            if (val.length > 6) score += 20;
            if (/[A-Z]/.test(val)) score += 30;
            if (/[0-9]/.test(val)) score += 30;
            if (/[^A-Za-z0-9]/.test(val)) score += 20;
            
            const bar = $('#strength-bar');
            bar.css('width', score + '%');
            if (score <= 40) bar.css('background', '#EF4444');
            else if (score <= 70) bar.css('background', '#F59E0B');
            else bar.css('background', '#22C55E');
        });

        // Form Submission Intercept
        $('#login-form, #signup-form').on('submit', function(e) {
            e.preventDefault();
            const action = $(this).attr('id') === 'login-form' ? 'Signing you in...' : 'Creating your account...';
            swal({
                title: action,
                text: "Connecting to Prime Local secure network",
                imageUrl: "https://i.gifer.com/ZZ5H.gif",
                showConfirmButton: false,
                timer: 1500
            });
        });
    });