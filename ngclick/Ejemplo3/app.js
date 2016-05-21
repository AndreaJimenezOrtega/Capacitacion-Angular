var app= angular.module("App",[]);

app.controller("controller",function($scope)
              {
   $scope.num1=0;
   $scope.num2=0;
   $scope.total= 0;
    $scope.sumar=function()
    {
        $scope.total=$scope.num1+$scope.num2;
    }
});