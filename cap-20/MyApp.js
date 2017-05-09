var MyApp = angular.module("MyApp",[]);

MyApp.controller("firstController",["$scope", "NameService", function($scope, NameService){
    $scope.name = "Bruno";
    NameService.save($scope.name);
}]);

MyApp.service("NameService", function() { // Angular cria um new por isso do this
   this.save = function(name){
    console.log(name)
   };
});

MyApp.factory("NameFactory", function(){
    var save = function(name){
        console.log(name);
    }
    return {
        save: save
    }
});

MyApp.provider("NameProvider", function(){
    $get
});