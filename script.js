var app = angular.module('adelleApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html'
	})
});

$('body').addClass('disable-scrolling');
$('body').bind('touchmove', function(e) {
	e.preventDefault();
});

$(window).load(function() {
	setTimeout(function() {
		$('#loader').fadeOut(700);
		$('body').removeClass('disable-scrolling');
		$('body').unbind('touchmove');
	}, 2000);
});


$(window).scroll(function() {
	if ($(window).scrollTop() > 1) {
		$('#navbar').addClass('navbar--change-color');
	} else {
		$('#navbar').removeClass('navbar--change-color');
	}
});

app.controller('NavbarCtrl', function($scope) {
	$scope.scrollTo = function(sectionId) {
		var section = $('#' + sectionId);
		$('html, body').animate({
			scrollTop: section.offset().top
		}, 'slow');
	}
});

app.controller('HomeCtrl', function($scope) {
	angular.element(document).ready(function() {
		var facts = $('.life__card__fact');
		$('#dot-1').addClass('life__dot--active');
		for (var i = 1; i < facts.length; i++) {
			$(this).find(facts[i]).hide();
		}

		// var photos = $('.life__photo');
		// for (var i = 0; i < photos.length; i++) {
		// 	console.log(photos);
		// 	$(this).find(photos[i]).hide();
		// }

		window.setInterval(function() {
			var currentFact = $('.life__card__fact:visible');
			var currentFactId = currentFact[0].id;
			var currentFactNum = currentFactId[currentFactId.length - 1];
			switch (currentFactNum) {
				case '1':
					$scope.showFact(2);
					break;
				case '2':
					$scope.showFact(3);
					break;
				case '3':
					$scope.showFact(4);
					break;
				default:
					$scope.showFact(1);
			}
		}, 8000);
	});

	$(window).scroll(function() {
		if (($(window).scrollTop() + $(window).height() >= $('.resume__item').offset().top) &&
			($(window).scrollTop() < $('#resume').offset().top + $('#resume').height())) {
			var resumeItems = $('.resume__item__logo__whiteout');
			for (var i = 0; i < resumeItems.length; i++) {
				var resumeItem = $('#' + resumeItems[i].id);
				if (resumeItem.offset().top + resumeItem.height() < $(window).scrollTop() + $(window).height()) {
					resumeItem.addClass('resume__item__logo__whiteout--fade-away');
				}
			}
		}

		if ($(window).scrollTop() + $(window).height() >= $('#skills-software-graph').offset().top) {
			softwareSkills = $('.skills-software');
			for (var i = 0; i < softwareSkills.length; i++) {
				var temp = softwareSkills[i].id;
				var software = $('#' + temp);
				var softwareId = temp.slice(0, 2);
				animateSkillsGraph(softwareId, software);
			}
		}

		if ($(window).scrollTop() + $(window).height() >= $('#skills-languages-graph').offset().top) {
			languageSkills = $('.skills-languages');
			for (var i = 0; i < languageSkills.length; i++) {
				var temp = languageSkills[i].id;
				var language = $('#' + temp);
				var languageId = temp.slice(0, 2);
				animateSkillsGraph(languageId, language);
			}
		}

		// if ($(window).scrollTop() + $(window).height() >= $('#life-photos').offset().top) {
		// 	var photos = $('.life__photo');
		// 	for (var i = 0; i < photos.length; i++) {
		// 		$(this).find(photos[i]).hide().fadeIn('slow');
		// 	}
		// }
	})

	function animateSkillsGraph(condition, element) {
		switch (condition) {
			case '20':
				element.addClass('skills__graph__columns__row__level--20');
				break;
			case '40':
				element.addClass('skills__graph__columns__row__level--40');
				break;
			case '60':
				element.addClass('skills__graph__columns__row__level--60');
				break;
			case '80':
				element.addClass('skills__graph__columns__row__level--80');
				break;
			default:
				element.addClass('skills__graph__columns__row__level--100');
		}
	}

	$scope.showFact = function(factNum) {
		var dot = $('#dot-' + factNum);
		var currentDot = $('.life__dot--active');
		dot.addClass('life__dot--active');
		currentDot.removeClass('life__dot--active');
		var fact = $('#fun-fact-' + factNum);
		var currentFact = $('.life__card__fact:visible');
		currentFact.fadeOut();
		fact.fadeIn();
	}
});