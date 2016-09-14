angular
    .module('polyglot-loc')
    .controller('reviewCtrl', reviewCtrl);

reviewCtrl.$inject = ['$http', '$scope', '$location'];

function reviewCtrl($http, $scope, $location) {
    function init() {
        $scope.newReview = {};
        $scope.newReview.title = '';
        $scope.newReview.customerReview = '';
        $scope.newReview.body = '';
        $scope.newReview.overall = '';
        console.log(' *** Were in the login controller, heres your defaults');
        console.log($scope.newReview);
    };

    init();

$scope.createReview = function() {
        console.log(' *** YOU JUST HIT SUBMIT! NO WE ARE IN THE FORM SUBMITTER! ***');
        console.log($scope.newReview);
        $http({
            method: 'POST',
            url: '/api/reviews',
            data: $scope.newReview,
        }).then(function successCallback(response) {
            console.log(response.data)
            if(response.data !== false) {
                console.log("Success!")
                $location.path('/api/reviews/'+response.data)
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



