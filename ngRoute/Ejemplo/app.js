var app= angular.module("App",["ngRoute"]);

app.config(function($routeProvider)
          {
    $routeProvider.when("/personas",{
        templateUrl:"Personas.html",
        controller:"Ctrlpersonas"
    }).when("/",{
        templateUrl:"Inicio.html",
        controller:"CtrlInicio"
    });
});