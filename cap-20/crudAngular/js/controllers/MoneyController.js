SaiaDoVermelho.controller("MoneyController",["$scope","MoneyService", function($scope, MoneyService){
	$scope.appName = "Saia Do Vermelho";
	MoneyService.test();
}]);