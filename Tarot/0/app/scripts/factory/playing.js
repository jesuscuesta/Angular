angular
	.module('tarotapp')
	.factory("playingFactory", playingFactory);


function playingFactory($http){
    return {
      getValue: function(callback) {
        $http.get('scripts/json/cards.json').success(callback);
      }
    }
}