SaiaDoVermelho.controller("MoneyController",["$scope","MoneyService", function($scope, MoneyService){
	$scope.money = MoneyService.money;
	$scope.new = function (params) {
		
	}
	
	// MoneyService.newIncoming({
	// 	name:"Salario",
	// 	value:2000
	// });
	
	// MoneyService.newExpense({
	// 	name:"mercado",
	// 	value:100
	// });

	console.log(MoneyService);

}]);