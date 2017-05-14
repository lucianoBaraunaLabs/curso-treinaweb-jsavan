SaiaDoVermelho.controller("MoneyController",["$scope","MoneyService", function($scope, MoneyService){
	$scope.appName = "Saia Do Vermelho";
	
	MoneyService.newIncoming({
		name:"Salario",
		value:2000
	});
	
	MoneyService.newExpense({
		name:"mercado",
		value:100
	});

	console.log(MoneyService);

}]);