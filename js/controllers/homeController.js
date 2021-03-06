'use strict'

angular.module("mtg").controller("homeController", function(API) {

	var vm = this;

	var ctx = document.getElementById("myChart");
	var ctx2 = document.getElementById("grChart");

	var cardData = API.getCards();

	cardData.then(function(response){
	 	
	 	cardData = response.data.cards;
	 	
		var colorArray = [];
	 	var White = 0;
		var Blue = 0;
		var Black = 0;
		var Red = 0;
		var Green = 0;

		var cmcMap = cardData.map(function(cards){
			return cards.cmc;
		});

		var grChart = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: [1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: 'Maxs',
                    data: cmcMap,
                    backgroundColor: 'rgb(73, 187, 197)',
                    borderColor: '#000000',
                    borderWidth: 2,
                },
                ],
            },
        });

	 	var colorMap = cardData.map(function(cards){
	 	 	

	 	 	if(cards.colors){
		 	 	cards.colors.forEach(function(color){

		 	 	if (color === 'White')
		 	 	{
		 	 		White ++;
		 	 	}
		 	 	else if (color === 'Blue')
		 	 	{
		 	 		Blue ++;
		 	 	}
		 	 	else if (color === 'Black')
		 	 	{
		 	 		Black ++;
		 	 	}
		 	 	else if (color === 'Red')
		 	 	{
		 	 		Red ++;
		 	 	}
		 	 	else if (color === 'Green')
		 	 	{
		 	 		Green ++;
		 	 	}
		 	 	});
	 	 	};
	 	 	});
	 	 	var colorArray = [White,Blue,Black,Red,Green];
	 	 	var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["White", "Blue", "Black", "Red", "Green"],
                datasets: [{
                    label: 'Maxs',
                    data: colorArray,
                    backgroundColor: ['rgb(255, 252, 211)',
                    'rgb(169, 220, 239)',
                    'rgb(197, 190, 184)',
                    'rgb(238, 164, 137)',
                    'rgb(147, 203, 164)',],
                    borderColor: '#886827',
                },
                ],
            },
            options: {
        		tooltips: {
           		callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    for (var i in allData) {
                        total += allData[i];
                    }
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                	}
            	}
        	  }
    		}
        });
	 });
});

	