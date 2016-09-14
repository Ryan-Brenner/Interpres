angular
    .module('polyglot-loc')
    .controller('jobCtrl', jobCtrl);

jobCtrl.$inject = ['$http', '$scope', '$location'];

function jobCtrl($http, $scope, $location) {
    function init() {
        $scope.jobPosting = {};
        $scope.jobPosting.title = '';
        $scope.jobPosting.customer = '';
        $scope.jobPosting.translator = '';
        $scope.jobPosting.review = '';
        $scope.jobPosting.requiredProficiency = ''; 
        $scope.jobPosting.requiredLanguage1 = '';
        $scope.jobPosting.requiredLanguage2 = '';
        $scope.jobPosting.potential_translator_IDs= '';
        $scope.jobPosting.location = '';
        $scope.jobPosting.scheduled = '';
        $scope.jobPosting.appointment = '';
        console.log(' *** Were in the login controller, heres your defaults');
        console.log($scope.jobPosting);
    };

    init();

    $scope.createJob = function() {
        console.log(' *** YOU JUST HIT SUBMIT! NO WE ARE IN THE FORM SUBMITTER! ***');
        console.log($scope.jobPosting);
        $http({
            method: 'POST',
            url: '/api/jobs',
            data: $scope.jobPosting,
        }).then(function successCallback(response) {
            console.log(response.data)
            if(response.data !== false) {
                console.log("Success!")
                $location.path('/api/jobs/'+response.data)
            }
            else if (response.data === false) {
                console.log("Incorrect Password")
                $location.path('/login')
            }
        }, function errorCallback(response) {

            console.log('username or password does not exist');
        });
    };
};


