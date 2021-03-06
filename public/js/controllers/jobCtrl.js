angular
    .module('polyglot-loc')
    .controller('jobCtrl', jobCtrl);

jobCtrl.$inject = ['$http', '$scope', '$location'];

function jobCtrl($http, $scope, $location) {
    function init() {
        $scope.jobPosting = {};
        $scope.userConfirm = {};
        $scope.jobPosting.title = '';
        $scope.jobPosting.customer = '';
        $scope.jobPosting.translator = '';
        $scope.jobPosting.review = '';
        $scope.jobPosting.requiredProficiency = '';
        $scope.jobPosting.requiredLanguages = [];
        $scope.jobPosting.potential_translator_IDs = '';
        $scope.jobPosting.location = [];
        $scope.jobPosting.scheduled = '';
        $scope.jobPosting.appointment = '';
        $scope.userConfirm.email = '';
        $scope.userConfirm.passTxt = '';
        $scope.locations = [];

        console.log(' *** Were in the JOBCTRL controller, heres your defaults');
        console.log($scope.jobPosting);
      

function storeMarker(position) {
  var locMarker = [
    position.coords.latitude,
    position.coords.longitude
  ];
    };
};

    init();
    $http({
        method: 'GET',
        url: '/api/jobs'
    }).then(function successCallback(response) {
        $scope.jobs = response.data;
        console.log(response.data);
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

    $scope.createJob = function() {
        console.log(' *** YOU JUST HIT SUBMIT! NO WE ARE IN THE FORM SUBMITTER! ***');
            function searchAddress() {
                var loc = [];
                var addressInput = $scope.jobPosting.location
                console.log($scope.jobPosting.location);
                loc.push(addressInput);
                var geocoder = new google.maps.Geocoder();
                console.log(addressInput);
                geocoder.geocode({
                    address: addressInput
                }, function(results, status) {

                    if (status == google.maps.GeocoderStatus.OK) {
                        
                        var lat = results[0]['geometry']['location']['lat'](results);
                        var lng = results[0]['geometry']['location']['lng'](results);
                        loc.push(lat);
                        loc.push(lng);
                        $scope.jobPosting.location = loc
                        console.log(loc);
                    }
                })
            }
            searchAddress()

        $http({
            method: 'POST',
            url: '/login/submit',
            data: $scope.userConfirm
        }).then(function successCallback(response) {
            if (response.data === false) {
                console.log("Invalid user info, please sign up")
            } else if (response.data !== false) {
                $scope.jobPosting.customer = response.data;
                console.log(response.data);
                console.log($scope.jobPosting.customer.data);
                $scope.jobPosting.requiredLanguage1 = $scope.jobPosting.requiredLanguage1.split(',')
                $scope.jobPosting.requiredLanguage2 = $scope.jobPosting.requiredLanguage2.split(',')
                $scope.jobPosting.requiredLanguages.push($scope.jobPosting.requiredLanguage1,$scope.jobPosting.requiredLanguage2)


                $http({
                    method: 'POST',
                    url: '/api/jobs',
                    data: $scope.jobPosting
                }).then(function successCallback(response) {
                    console.log(response)
                    if (response.data !== false) {
                        console.log("Success!" + response.data._id)

                        $location.path('/jobPosting/' + response.data._id)
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
