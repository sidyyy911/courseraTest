(function(){
	'use strict';
	angular.module('lunchCheckerApp',[]).controller('lunchCheckerController', lunchCheckerController);
	lunchCheckerController.$inject=['$scope'];
	function calculateNumberOfItems(items){
			var arrayOfItems=items.split(',');
			var size=0;
			for(var i=0;i<arrayOfItems.length;i++)
			{
				var temp=arrayOfItems[i].trim();
				if(temp!=="")
				{
					size++;
				}
			}
			
			console.log(size);
			return size;
		}
	function lunchCheckerController($scope){
		$scope.lunchItems="";
		$scope.message="...";
		$scope.checkIfOK=function(){


			var numberOfItems=calculateNumberOfItems($scope.lunchItems);
			if($scope.lunchItems==="" || numberOfItems===0)
			{
				$scope.message="Please enter data first";
				return;
			}
			

			if(numberOfItems<=3)
			{
				$scope.message="Enjoy!";
			}
			else
			{
				$scope.message="Too much!";
			}

		};
	}
})();