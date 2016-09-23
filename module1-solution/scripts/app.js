(function() {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.items = [];
		$scope.userInput = '';
		$scope.message = '';
		$scope.checkIfTooMuch = function () {
			$scope.items = getItemsFromString($scope.userInput);
			if($scope.items.length >= 3) {
				$scope.message = 'Too much!';
			} else {
				$scope.message = 'Enjoy!';
			}
			console.log($scope.items.length + ' items:')
			console.log($scope.items);
		};
		function getItemsFromString(string) {
			var array = [];
			array = string.split(',').filter(isValidItem);
			return array;
		}
		function isValidItem(item) {
			return item.trim() !== '';
		}
	}
}());
