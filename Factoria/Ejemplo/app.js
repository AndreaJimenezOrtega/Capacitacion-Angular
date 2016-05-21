var app= angular.module("MyApp",[]);

app.factory("Factoryfrutas",function()
           {
    return{
        frutas:[
            {
               nombre:"pera",color:"verde" 
            },
            {
               nombre:"manzana",color:"roja" 
            },
            {
               nombre:"zapote",color:"cafe" 
            },
            {
               nombre:"naranja",color:"amarilla" 
            },
            {
               nombre:"mango",color:"amarillo" 
            }
        ]
    }
});


app.controller("controlador",["Factoryfrutas","$scope",function(Factoryfrutas,$scope)
{
    $scope.frutas=  Factoryfrutas.frutas;                            
}]);








