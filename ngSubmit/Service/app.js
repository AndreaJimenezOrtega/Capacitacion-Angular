var app = angular.module("App",[]);

 app.controller("paisesController",["$scope","$http",function($scope,$http)
      {
         $scope.buscarPaises=function()
          {
             $http.get($scope.url)
             .success(function(data)
                     {
                 $scope.paises=data;
             })
             .error(function(err)
                   {
                 console.log("error" + err);
             });
          }
 }]);