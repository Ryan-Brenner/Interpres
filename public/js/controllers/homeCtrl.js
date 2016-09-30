angular
    .module('polyglot-loc')
    .controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$scope', '$http'];

function homeCtrl($scope, $http) {
    $scope.greetingText = "Need A Translation";
    $scope.jobs = [];

    function init() {
        console.log('*** INIT HOME CONTROLLER ***');
        var lang = window.navigator.language.substring(0, 2).toString()
        var text = $scope.greetingText.toString()
        $http({
            method: 'GET',
            url: '/translatedHome/' + lang + '/' + text,
        }).then(function successCallback(response) {
            $scope.greetingText = response.data.translatedText
        }, function errorCallback(response) {
            console.log('There was an error getting the data', response);
        });
        $http({
            method: 'GET',
            url: '/api/jobs/locations'
        }).then(function successCallback(response) {
             // = response.data
             for (var i=response.data.length-1; i>=0; i--){
             $scope.jobs.push([ response.data[i].title , response.data[i].location[0]] ) 
         };
        }, function errorCallback(response) {
            console.log('There was an error getting the data', response);
        });

    };
    init();
};
