angular
    .module('polyglot-loc')
    .controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$scope', '$http'];

function homeCtrl($scope, $http) {
    $scope.greetingText = "Need A Translation";
    $scope.jobs = [];
     $scope.locations =[];

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
     var map;

        function initMap() {
            var locations =  $scope.locations
            var myLatlng = new google.maps.LatLng(37.78, -122.44);
            var mapOptions = {
                zoom: 12,
                center: myLatlng,
                scrollwheel: false
            }
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                title: "Hello World!"
            });
            marker.setMap(map);

            for (i = 0; i < $scope.locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng($scope.locations[i][1], $scope.locations[i][2]),
                    map: map
                });


            };
        };

     $scope.locations.push([response.data[0].location[0], response.data[0].location[1], response.data[0].location[2], 4]),
     $scope.locations.push([response.data[1].location[0], response.data[1].location[1], response.data[1].location[2], 7])
     console.log($scope.locations);
     initMap();
        }, function errorCallback(response) {
            console.log('There was an error getting the data', response);
        });

    };
    init();
};
