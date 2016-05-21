var app= angular.module("App",[]);

app.controller("controlador",function($scope)
              {
   $scope.Mensaje="Hola compañeros";
    $scope.MiFuncion= function()
    {
        $scope.Mensaje="Cambio el mensaje";
    }
});