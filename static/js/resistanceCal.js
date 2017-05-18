var resistanceCal=angular.module("resistanceCal",[]);




 	resistanceCal.controller('calculateRes', ['$scope', function($scope){
 		
 		$scope.multiplier='-1a';

 		$scope.calculateResistance=function() {
 			//console.log('$scope.multiplier'+$scope.multiplier);
 			var res =   $scope.color1+ $scope.color2; 
 			$scope.resistance=parseInt(res)*Math.pow(10, $scope.multiplier);

 		};

 		angular.element(document).ready(function () {
				$('#color1 option')[1].remove();
    		});
 		
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

resistanceCal.filter('kiloOhmConversion',['$filter',function($filter){
	return function(input){
		if(parseInt(input) >= 1000){
			return $filter('number')(input/1000)+' k';
		}
		else{
			return input;
		}
		}


}]);

