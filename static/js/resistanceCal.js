var resistanceCal=angular.module("resistanceCal",[]);




 	resistanceCal.controller('calculateRes', ['$scope', function($scope){
 		
 		

 		$scope.calculateResistance=function() {
 			console.log('Method called....');
 			$scope.resistance =   parseInt($scope.color1) + parseInt($scope.color2); 
 		};
 		
 	}]);



resistanceCal.directive('colorDropDown',function(){
	return {
		templateUrl:'drop-down.html'
	};
});


