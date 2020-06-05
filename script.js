var app = angular.module('adelleApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html'
	})
});

// $('body').addClass('disable-scrolling');
// $('body').bind('touchmove', function(e) {
// 	e.preventDefault();
// });

// $(window).on("load", function() {
// 	setTimeout(function() {
// 		$('#loader').fadeOut(700);
// 		$('body').removeClass('disable-scrolling');
// 		$('body').unbind('touchmove');
// 	}, 2000);
// });

// $(window).scroll(function() {
// 	if ($(window).scrollTop() > 1) {
// 		$('#navbar').addClass('navbar--change-color');
// 	} else {
// 		$('#navbar').removeClass('navbar--change-color');
// 	}
// });

// app.controller('NavbarCtrl', function($scope) {
// 	$scope.scrollTo = function(sectionId) {
// 		var section = $('#' + sectionId);
// 		$('html, body').animate({
// 			scrollTop: section.offset().top
// 		}, 'slow');
// 	}
// });

app.controller('HomeCtrl', function($scope) {
	angular.element(document).ready(function() {
		// Loop through jumbotron images
		var jumbotronImg1 = $('#jumbotron__img-1');
		var jumbotronImg2 = $('#jumbotron__img-2');
		var jumbotronImg3 = $('#jumbotron__Img-3');
		var currentJumbotronImg = jumbotronImg1;
		var transitionTime = 2000;
		var bufferTime = 500; // To replace jumbotronImg2 (which has disappeared)
		window.setInterval(function() {
			switch (currentJumbotronImg) {
				case jumbotronImg1:
					jumbotronImg1.fadeOut(transitionTime);
					currentJumbotronImg = jumbotronImg2;
					break;
				case jumbotronImg2:
					jumbotronImg2.fadeOut(transitionTime);
					currentJumbotronImg = jumbotronImg3;
					break;
				default:
					jumbotronImg1.fadeIn(transitionTime);
					jumbotronImg2.delay(transitionTime + bufferTime).fadeIn(bufferTime);
					currentJumbotronImg = jumbotronImg1;
			}
		}, 5000);

		// var facts = $('.life__card__fact');
		// $('#dot-1').addClass('life__dot--active');
		// for (var i = 1; i < facts.length; i++) {
		// 	$(this).find(facts[i]).hide();
		// }

		// // var photos = $('.life__photo');
		// // for (var i = 0; i < photos.length; i++) {
		// // 	console.log(photos);
		// // 	$(this).find(photos[i]).hide();
		// // }

		// window.setInterval(function() {
		// 	var currentFact = $('.life__card__fact:visible');
		// 	var currentFactId = currentFact[0].id;
		// 	var currentFactNum = currentFactId[currentFactId.length - 1];
		// 	switch (currentFactNum) {
		// 		case '1':
		// 			$scope.showFact(2);
		// 			break;
		// 		case '2':
		// 			$scope.showFact(3);
		// 			break;
		// 		case '3':
		// 			$scope.showFact(4);
		// 			break;
		// 		default:
		// 			$scope.showFact(1);
		// 	}
		// }, 8000);
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

		// if (($(window).scrollTop() + $(window).height() >= $('.projects__app__img').offset().top) &&
		// 	($(window).scrollTop() < $('#projects').offset().top + $('#projects').height())) {
		// 	var projects = $('.projects__app__img__phone');
		// 	for (var i = 0; i < projects.length; i++) {
		// 		var project = $('#' + projects[i].id);
		// 		if (project.offset().top + (project.height() / 3) < $(window).scrollTop() + $(window).height()) {
		// 			project.removeClass('projects__app__img__phone--hide');
		// 		}
		// 	}
		// }

		if ($(window).scrollTop() + $(window).height() >= $('#life-photos').offset().top) {
			var photos = $('.life__photo__img');
			for (var i = 0; i < photos.length; i++) {
				var photo = $('#' + photos[i].id);
				photo.removeClass('life__photo__img--hide');
			}
		}
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