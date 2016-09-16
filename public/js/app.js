var app = angular.module('polyglot-loc', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
    	templateUrl: 'public/views/templates/homepage.html',
    	controller: 'homeCtrl'
    })
    .when('/login', {
    	templateUrl: 'public/views/templates/login.html',
    	controller: 'loginCtrl'
    })
    .when('/register', {
    	templateUrl: 'public/views/templates/register.html',
        controllerAs: 'usersIndexCtrl',
        controller: 'UsersIndexController'
    })
    .when('/profile/:id', {
        templateUrl: 'public/views/templates/userProfile.html',
        controller: 'UsersIndexController'
    })
    .when('/newjob', {
        templateUrl: 'public/views/templates/newJob.html',
        controller: 'jobCtrl'
    })
    .when('/browseJobs', {
        templateUrl: 'public/views/templates/jobIndex.html',
        controller: 'jobCtrl'
    })
    .when('/jobPosting/:id', {
        templateUrl: 'public/views/templates/jobShow.html',
        controller: 'jobShowCtrl'
    })
    .when('/review', {
        templateUrl: 'public/views/templates/newReview.html',
        controller: 'reviewCtrl'
    })

});
