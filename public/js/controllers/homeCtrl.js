angular
    .module('polyglot-loc')
    .controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$scope', '$http'];

function homeCtrl($scope, $http) {
    $scope.greetingTranslated = ''
    $scope.greetingText = "Need A Translation"

    function init() {
        console.log('*** INIT HOME CONTROLLER ***');
        var lang = window.navigator.language.substring(0, 2).toString()
        var text = $scope.greetingText.toString()
        console.log(text)
        console.log(lang)
        $http({
            method: 'GET',
            url: '/translatedHome/' + lang + '/' + text,
        }).then(function successCallback(response) {
            greetingTranslated = response.data.translatedText;
                $scope.greetingText = response.data.translatedText
        }, function errorCallback(response) {
            console.log('There was an error getting the data', response);
        });
    };
    init();
};
