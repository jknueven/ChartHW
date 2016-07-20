'use strict'

angular.module("mtg").controller("homeController", function(API) {

	var vm = this;
	
	var data = API.getCards();

	data.then(function(cards){
	 	

	 });

	var sets = API.getSets();

	sets.then(function(sets){

	}):


});