var app = angular.module('adelleApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html'
	})
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
});