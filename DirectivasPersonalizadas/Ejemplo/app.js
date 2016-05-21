
var app = angular.module("App",[]);

app.controller("controlador",function($scope)
              {
   $scope.cliente={
       nombre:"Andre",
       direccion:"Av 12 "
   }; 
});

app.directive("misclientes",function()
             {
    return{
        template:'nombre:{{cliente.nombre}} direccion:{{cliente.direccion}}'
    };
});