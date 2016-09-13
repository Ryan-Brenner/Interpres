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

    init();

    $scope.submitForm = function() {
        console.log(' *** YOU JUST HIT SUBMIT! NO WE ARE IN THE FORM SUBMITTER! ***');
        console.log($scope.credentials);
        $http({
            method: 'POST',
            url: '/login/submit',
            data: $scope.credentials,
        }).then(function successCallback(response) {
            console.log(response.data)
            if(response.data !== false) {
                console.log("Success!")
                $location.path('/api/users/'+response.data)
            }
            else if (response.data === false) {
                console.log("Incorrect Password")
                var e = new Error('password incorrect'); 
                e.message
                $location.path('/login')
            }
        }, function errorCallback(response) {
            console.log('There was an error posting the data');
        });
	};
};
