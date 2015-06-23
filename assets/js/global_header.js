$(document).ready(function() {
	// On show of all .dropdown menus
	$('.dropdown').on('show.bs.dropdown', function(e){
		// If screen resolution >= 'md'
		if ($(window).width() >= 992) {
			// Change the animation for top sub-menus to fade-in
			$(this).find('#global-header_localisation--form').css('display', 'block').animate({'opacity': 1});
			$(this).find('#global-header_services--more').css('display', 'block').animate({'opacity': 1});

			if ($(this).parents('#global-header_btm-nav--menu').length != 0) {
				$('#global-header_overlay').css('position', 'fixed').addClass('open');
			};
		};

		// Open the according menu
		$(this).find('.dropdown-menu').slideDown();

		// On hide of all .dropdown menus
	}).on('hidden.bs.dropdown', function(e){
		// If screen resolution >= 'md'
		if ($(window).width() >= 992) {
			// Change the animation for top sub-menus to fade-out
			$(this).find('#global-header_localisation--form').animate({'opacity': 0}, function() {
				$(this).css('display', 'none');
			});

			$(this).find('#global-header_services--more').animate({'opacity': 0}, function() {
				$(this).css('display', 'none');
			});

			$('#global-header_overlay').removeClass('open');
		};

		// Close the according menu
		$(this).find('.dropdown-menu').slideUp(function() {
			if ($('#global-header_btm-nav--menu li.open').length == 0) {
				$('#global-header_overlay').css('position', 'static');
			};
		});
	});

	// Disabled the default animation on show/hide of the top and main menus
	$('#global-header_top-nav, #global-header_btm-nav--menu').on('show.bs.collapse hide.bs.collapse', function(e) {
        if (e.target.id == "global-header_top-nav" || e.target.id == "global-header_btm-nav--menu") {
        	e.preventDefault();
        };
    });


    $('#global-header_burger, #global-header_my_lebara--btn').on('click', function(e) {
        e.preventDefault();

        var open = $($(this).data('target')).hasClass('in');

       	$(this).removeClass('open');
       	$('#global-header_top-nav, #global-header_btm-nav--menu').removeClass('in')
        	.find('.navbar-collapse').removeClass('in');

        $('#global-header_overlay').removeClass('open');
        $('.navbar-toggle').removeClass('open');
        
        if (!open) {
        	$($(this).data('target')).addClass('in');

        	$('#global-header_overlay').css('position', 'fixed').addClass('open');
        	$(this).addClass('open');
        };
    });

    $('#global-header_search svg').click(function() {
    	$(this).prev().toggleClass('open');
    });

    $('#global-header_overlay').click(function() {
    	$('#global-header_top-nav, #global-header_btm-nav--menu').removeClass('in')
        	.find('.navbar-collapse').removeClass('in');

        $('#global-header_overlay').removeClass('open');
        
        setTimeout(function() {
			$('#global-header_overlay').css('position', 'static');
		}, 300);

        $('#global-header_burger').removeClass('open');
        $('#global-header_my_lebara--btn').removeClass('open');
        $('.navbar-toggle:not(#global-header_burger, #global-header_my_lebara--btn)').removeClass('open');
    });

    $('.navbar-toggle:not(#global-header_burger, #global-header_my_lebara--btn)').click(function() {
    	$(this).toggleClass('open');
    });
	
	$(window).on('resize', function () {
		if ($(window).width() >= 992) {
			$('#global-header_top-nav, #global-header_btm-nav--menu')
				.removeClass('in')
				.css('display', 'none');

			$('#global-header_overlay').removeClass('open');
			
			setTimeout(function() {
				$('#global-header_overlay').css('position', 'static');
			}, 300);

			$('#global-header_burger').removeClass('open');
			$('#global-header_my_lebara--btn').removeClass('open');

			$('.dropdown').removeClass('open').find('.dropdown-menu').css('display', 'none');
			$('#global-header_localisation--form, global-header_services--more').css('opacity', 0);

			$('.navbar-collapse').removeClass('in');
		} else {
			$('#global-header_top-nav, #global-header_btm-nav--menu').css('display', 'block');

			$('#global-header_localisation--form, global-header_services--more').css('opacity', 1);
		};
	}).on('scroll', function() {
		if ($(window).width() < 992) {
			console.log($('#global-header_btm-nav').height());
			if ($(window).scrollTop() > $('#global-header_btm-nav').height()) {
				$('#global-header_btm-nav').addClass('fixed');
			} else {
				$('#global-header_btm-nav').removeClass('fixed');
			};
		} else {
			$('#global-header_btm-nav').removeClass('fixed');
		};
	});
});
