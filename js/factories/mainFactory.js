(function () {
	'use strict';
	angular
		.module('mtg').factory('API', function($http) {


		 	function getCards(cards)
		 	{
		 		var call = $http({
		          method: 'GET',
		          url: `https://api.magicthegathering.io/v1/cards`,
		         
		        });	
		        return call;

		 	}

		 	function getSets(sets)
		 	{
		 		var call = $http({
		 			method:'GET',
		 			url: 'https://api.magicthegathering.io/v1/sets',
		 		});
		 		return call;
		 	}

		 	return {
		 		getSets:getSets,
		 		getCards:getCards,
		 	}
	});
})();