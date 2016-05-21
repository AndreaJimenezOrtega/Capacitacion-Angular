app.controller("CtrlInicio",function($scope)
              {
   $scope.saludo="Hola compañeros desde el inicio"; 
}).controller("Ctrlpersonas",function(){
    this.saludo="Hola desde el personas";
    this.Personas=[
     {
         nombre:"Andrea",
         edad:"18"
     },
     {
         nombre:"julio",
         edad:"20"
     },
      {
         nombre:"andres",
         edad:"16"
     }
    ]
});
