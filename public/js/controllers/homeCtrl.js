angular
	.module('polyglot-loc')
	.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['$scope'];

	function homeCtrl($scope){
	// we're inside the angular controller
		function init(){
			//init/reset init values here
			console.log('*** INIT HOME CONTROLLER ***');
		};
		init();
	};