var resistanceCal=angular.module("resistanceCal",[]);




 	resistanceCal.controller('calculateRes', ['$scope', function($scope){
 		
 		

 		$scope.calculateResistance=function() {
 			console.log('$scope.multiplier'+$scope.multiplier);
 			var res =   $scope.color1+ $scope.color2; 
 			$scope.resistance=parseInt(res)*Math.pow(10, $scope.multiplier);

 		};
 		
 	}]);



resistanceCal.directive('colorDropDown',function(){
	return {
		templateUrl:'drop-down.html'
	};
});

resistanceCal.directive('toleranceDropDown',function(){
	return{
		templateUrl:'tolerance-drop-down.html'
	}
});

resistanceCal.directive('multiplierDropDown', function(){
	return{
		templateUrl:'multiplier-drop-down.html'
	}
});

