angular
    .module('polyglot-loc')
    .controller('UsersIndexController', UsersIndexController);

UsersIndexController.$inject = ['$http'];

function UsersIndexController($http) {
    console.log("CONNECTED")
    vm = this;
    vm.newUser = {};
    vm.newUser = {
        username: vm.username,
        email: vm.email,
        password: vm.passTxt,
        fName: vm.fName,
        lName: vm.lName,
        languages: vm.languages,
        role: vm.role,
        location: vm.consent,
        pois: vm.pois
    };
    console.log(vm.newUser)
    $http({
        method: 'GET',
        url: '/api/users'
    }).then(function successCallback(response) {
        vm.users = response.data;
    }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });

    vm.createUser = function() {
        console.log(vm.newUser)
        $http({
            method: 'POST',
            url: '/api/users',
            data: vm.newUser,
        }).then(function successCallback(response) {
            vm.users.push(response.data);
        }, function errorCallback(response) {
            console.log('There was an error posting the data');
        });
    }

    vm.editUser = function(user) {
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

    vm.deleteUser = function(user) {
        $http({
            method: 'DELETE',
            url: '/api/users/' + user._id
        }).then(function successCallback(json) {
            var index = vm.users.indexOf(user);
            vm.users.splice(index, 1);
        }, function errorCallback(response) {
            console.log('There was an error deleting the data', response);
        });
    }

}
