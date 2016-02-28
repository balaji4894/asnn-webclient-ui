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

    $scope.availableSearchParams = [
	  { key: "name", name: "Name", placeholder: "Name..." },
	  { key: "city", name: "City", placeholder: "City...", restrictToSuggestedValues: true, suggestedValues: ['Berlin', 'London', 'Paris'] },
	  { key: "country", name: "Country", placeholder: "Country..." },
	  { key: "emailAddress", name: "E-Mail", placeholder: "E-Mail..." },
	  { key: "job", name: "Job", placeholder: "Job..." }
	];

	$scope.submitQuery=function(query)
	{
		/*$http.get('https://stormy-brushlands-60910.herokuapp.com/query?q="Korattur Chennai"')
		.success(function(response){
			$scope.model.result=response;
		});
*/
		var url = 'https://stormy-brushlands-60910.herokuapp.com/query?q="Korattur Chennai"';
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
			});
		};
  });
