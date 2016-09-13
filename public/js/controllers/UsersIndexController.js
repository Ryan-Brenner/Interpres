
angular
    .module('polyglot-loc')
    .controller('UsersIndexController', UsersIndexController);

UsersIndexController.$inject = ['$http', '$scope'];


function UsersIndexController($http, $scope) {
    function init() {
        console.log("CONNECTED")
    $scope.newUser = {};
    $scope.newUser.username = '';
    $scope.newUser.email = '';
    $scope.newUser.password = '';
    $scope.newUser.fName = '';
    $scope.newUser.lName = '';
    $scope.newUser.languages = '';
    $scope.newUser.role = ''; 
    $scope.newUser.ocation = '';
    $scope.newUser.pois = '';
    console.log($scope.newUser);
    };

    init();
    

    console.log($scope.newUser)
    $http({
        method: 'GET',
        url: '/api/users'
    }).then(function successCallback(response) {
        $scope.users = response.data;
    }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });

    $scope.createUser = function() {
        console.log($scope.newUser)
        $http({
            method: 'POST',
            url: '/api/users',
            data: $scope.newUser,
        }).then(function successCallback(response) {
            $scope.users.push(response.data);
        }, function errorCallback(response) {
            console.log('There was an error posting the data', response);
        });
    }

    $scope.editUser = function(user) {
        $http({
            method: 'PUT',
            url: '/api/users/' + user._id,
            data: user
        }).then(function successCallback(json) {
            // don't need to do anything!
        }, function errorCallback(response) {
            console.log('There was an error editing the data', response);
        });
    }

    $scope.deleteUser = function(user) {
        $http({
            method: 'DELETE',
            url: '/api/users/' + user._id
        }).then(function successCallback(json) {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
        }, function errorCallback(response) {
            console.log('There was an error deleting the data', response);
        });
    }

}
