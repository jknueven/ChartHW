'use strict'

angular.module("mtg").controller("homeController", function(API) {

	var vm = this;

	var ctx = document.getElementById("myChart");
    var ctx = document.getElementById("myChart").getContext("2d");

	
	var cardData = API.getCards();

	cardData.then(function(cards){
	 	
	 	cardData = cards.data.cards;

	 	 var colorMap = cardData.map(function(cardData){
	 	 	console.log(cardData.color);
          return cardData.color;
        });

        var cmcMap = cardData.map(function(cardData){
          return cardData.cmc;
        });

	 });

	var sets = API.getSets();

	sets.then(function(sets){

	});

	var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["White", "Blue", "Black", "Red", "Green"],
                datasets: [{
                    label: 'Maxs',
                    data: colorMap,
                    backgroundColor: 'rgba(255,0,0,.2)',
                },
                {
                    label: 'Mins',
                    data: cmcMap,
                    backgroundColor: 'rgba(0,0,255,.4)',
                }
                ]
            },
        });


});