'use strict';

/**
 * @ngdoc function
 * @name asnnWebclientUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the asnnWebclientUiApp
 */
angular.module('asnnWebclientUiApp')
  .controller('MainCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $('.btn').on('click', function() {
	  var $this = $(this);
	  $this.button('loading');
	    setTimeout(function() {
	       $this.button('reset');
	   }, 8000);
	});

    $scope.availableSearchParams = [
	  { key: "name", name: "Name", placeholder: "Name..." },
	  { key: "city", name: "City", placeholder: "City...", restrictToSuggestedValues: true, suggestedValues: ['Berlin', 'London', 'Paris'] },
	  { key: "country", name: "Country", placeholder: "Country..." },
	  { key: "emailAddress", name: "E-Mail", placeholder: "E-Mail..." },
	  { key: "job", name: "Job", placeholder: "Job..." }
	];

	$scope.submitQuery=function(query)
	{
		$scope.model.showresult=false;
		$scope.model.showProgressModal=true;
		$http.get('https://stormy-brushlands-60910.herokuapp.com/query?q="'+$scope.model.querystring+'"')
		.success(function(response){
			$('.btn').button('reset');
			$scope.model.showresult=true;
			$scope.model.showProgressModal=false;
			$scope.model.result=response;
		})
		.error(function(response){
			$scope.model.showProgressModal=false;
		});

		/*var url = 'https://stormy-brushlands-60910.herokuapp.com/query?q=Korattur Chennai';
			$http({
			    method: 'JSONP',
			    url: url
			}).
			success(function(status) {
			    //your code when success
			    console.log("success");
			    $scope.model.result=angular.fromJson(response);
			    console.log($scope.model);
			}).
			error(function(status) {
			    //your code when fails
			});*/
	};

	$scope.parseString=function(inputString){
		var i=0;
		while(i < inputString.length){
			if(inputString[i]=='|'){
				inputString[i]=' ';
			}
			i++;
		}
		return inputString;
	}
  });
