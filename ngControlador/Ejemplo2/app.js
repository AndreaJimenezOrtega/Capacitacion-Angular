var app = angular.module("MiAplicacion",[]);

app.controller("Controlador",function($scope)
              {
   $scope.nombre = "Julio";
    $scope.apellido = "Naranjo";
    $scope.nombreCompleto=$scope.nombre + $scope.apellido;
});