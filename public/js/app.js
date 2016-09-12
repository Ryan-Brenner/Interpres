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
});
