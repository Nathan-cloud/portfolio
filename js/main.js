/** @format */

$(document).ready(function () {

	'use strict';

	//********* page loader js

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1000);


	function sendMail(){
		var params = {
			name: document.getElementById("form_name").value , 
			email: document.getElementById("form_email").value ,
			message: document.getElementById("form_message").value ,
		};
	
	const serviceID = "service_7avxanp"
	const templateId = "template_5zn96ih"
	
	emailjs
		.send(serviceID, templateId, params)
		.then((res) => {
			 document.getElementById("form_name").value = "", 
			 document.getElementById("form_email").value = "",
			 document.getElementById("form_message").value = "",
			 console.log(res);
			 alert("Your Message was sent successfully")
	
		})
		.catch((err) => console.log(err));
	
	
	
	
	}
	//********** menu background color change while scroll

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});

	//********** menu hides after click (mobile menu)

	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});

	//*********** scrollspy js

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195,
	});

	//************ smooth scroll js

	$('a.smooth-menu,a.custom-btn,a.banner-btn').on('click', function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: $(anchor.attr('href')).offset().top - 50,
				},
				1000
			);
	});

	//*********** Animated headline js

	$('.animate-scale').animatedHeadline({
		animationType: 'clip',
	});

	//***** Skill bar js

	var skillbar = $('.skillbar');

	skillbar.waypoint(
		function () {
			skillbar.each(function () {
				$(this)
					.find('.skillbar-child')
					.animate(
						{
							width: $(this).data('percent'),
						},
						1000
					);
			});
		},
		{
			offset: '80%',
		}
	);

	//*** wow js

	new WOW().init();

	//*** Services carousel

	$('#services-carousel').owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed: 800,
		paginationSpeed: 800,
		smartSpeed: 500,
		autoplay: true,
		singleItem: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
			},
			680: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	//*****Magnific Pop up js

	$(
		'#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6'
	).magnificPopup({
		delegate: 'a',
		removalDelay: 400, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
		},
		midClick: true,
	});




});