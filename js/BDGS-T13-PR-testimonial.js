function filterTestimonials(type) {
        $('.bdgs-t13-pr-tab-btn').removeClass('active');
        $(`.bdgs-t13-pr-tab-btn[data-filter="${type}"]`).addClass('active');
        
        $('.testi-item').fadeOut(200, function() {
            $(`.testi-item.${type}`).fadeIn(300);
        });
    }

    $(document).ready(function() {
        $('.bdgs-t13-pr-tab-btn').on('click', function() {
            filterTestimonials($(this).data('filter'));
        });

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
            if ($(window).scrollTop() > 50) {
                $('.bdgs-t13-pr-navbar').addClass('scrolled');
            } else {
                $('.bdgs-t13-pr-navbar').removeClass('scrolled');
            }
        });

        // Statistics Counter Logic
        $('.bdgs-t13-pr-counter').each(function() {
            var $this = $(this);
            var target = parseFloat($this.data('target'));
            var isDecimal = target % 1 !== 0;
            
            $({ countNum: 0 }).animate({
                countNum: target
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    if (isDecimal) {
                        $this.text(this.countNum.toFixed(1));
                    } else {
                        $this.text(Math.floor(this.countNum));
                    }
                },
                complete: function() {
                    if (isDecimal) {
                        $this.text(target.toFixed(1));
                    } else {
                        $this.text(target);
                    }
                }
            });
        });

        checkReveal();
    });