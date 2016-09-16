angular
    .module('polyglot-loc')
    .controller('jobShowCtrl', jobShowCtrl);

jobShowCtrl.$inject = ['$http', '$scope', '$location', '$routeParams'];

function jobShowCtrl($http, $scope, $location, $routeParams) {
        function init() {


        console.log(' *** Were in the JOB_SHOW_CTRL controller, heres your defaults');
    };

    init();

        $http({
            method: 'GET',
            url: '/api/jobs/'+ $routeParams.id ,
        }).then(function successCallback(response) {
            $scope.job = response.data;
            console.log(response.data);
        }, function errorCallback(response) {
            console.log('There was an error getting the data', response);

        });

    $scope.acceptJob = function(job) {

        $http({
            method: 'POST',
            url: '/login/submit',
            data: $scope.userConfirm
        }).then(function successCallback(response) {
            if (response.data === false) {
                console.log("Invalid user info, please sign up")
            } else if (response.data !== false) {
                console.log(response.data._id)
                $scope.job.translator[0]=response.data;
                console.log($scope.job);

                $http({
                    method: 'PUT',
                    url: '/api/jobs/' + job._id + '/update',
                    data: $scope.job
                }).then(function successCallback(response){
                    console.log(response)
                    if (response.data !== false) {
                        console.log("Updated job!")
                        console.log(response.data)
                    } else if (response.data === false) {
                        console.log("Incorrect Password")
                        $location.path('/login')
                    }
                }, function errorCallback(response) {

                    console.log('username or password does not exist');
                });
            };
        }, function errorCallback(response) {

            console.log('there was an error posting this job');
        });
    };
};

