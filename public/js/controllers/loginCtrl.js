angular
	.module('polyglot-loc')
	.controller('loginCtrl', loginCtrl);

	homeCtrl.$inject = ['$scope'];

	function loginCtrl($scope){
	// we're inside the angular controller
		function init(){
			//init/reset init values here
			console.log('*** INIT LOGIN CONTROLLER ***');
		};
		init();






	};


	// make a auth service?