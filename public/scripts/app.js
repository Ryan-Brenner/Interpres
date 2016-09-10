/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('polyglot-loc', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/users',
      controllerAs: 'usersIndexCtrl',
      controller: 'UsersIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/users-show',
      controllerAs: 'usersShowCtrl',
      controller: 'UsersShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
