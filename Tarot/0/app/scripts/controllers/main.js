(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name tarotapp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the tarotapp
	 */
	angular
		.module('tarotapp')
	  	.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['playingFactory'];

	function MainCtrl(playingFactory) {
		/* jshint validthis: true */
	    var vm = this;
	    playingFactory.getValue(function(data) {
	     	vm.cards = data;
	  	});
	}

}());