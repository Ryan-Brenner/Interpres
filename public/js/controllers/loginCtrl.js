angular
    .module('polyglot-loc')
    .controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$http', '$scope', '$location'];

function loginCtrl($http, $scope, $location) {
    function init() {
        $scope.credentials = {};
        $scope.credentials.email = '';
        $scope.credentials.passTxt = '';
        console.log(' *** Were in the login controller, heres your defaults');
        console.log($scope.credentials);
    };

    $scope.submitForm = function() {
        console.log(' *** YOU JUST HIT SUBMIT! NO WE ARE IN THE FORM SUBMITTER! ***');
        console.log($scope.credentials);
        $http({
            method: 'POST',
            url: '/login/submit',
            data: $scope.credentials,
        }).then(function successCallback(response) {
            console.log("Success!")
            $location.path('/');
        }, function errorCallback(response) {
            console.log('There was an error posting the data', response);
        });
	};
};
