$(document).ready(function() {
        // Reveal Animation Logic
        function checkReveal() {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementVisible = 100;

            $('.reveal').each(function() {
                var elementTop = $(this).offset().top;
                if (elementTop < scrollTop + windowHeight - elementVisible) {
                    $(this).addClass('active');
                }
            });
        }

        $(window).on('scroll', function() {
            checkReveal();
        });

        // Initialize view
        checkReveal();
    });
    document.querySelectorAll('.pl-job-bookmark').forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.preventDefault(); // stop card navigation
        this.classList.toggle('saved');

        const i = this.querySelector('i');
        i.classList.toggle('fa-heart');
        i.classList.toggle('fa-heart-o');
    });
});