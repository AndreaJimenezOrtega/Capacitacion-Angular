var app = angular.module("MiModulo",[]);

app.controller("ControllerAs",function()
              {
    this.Personas=[
        {
           nombre:"Andres",
           apellido:"Naranjo",
           Telefono:"2314141"
       },
       {
           nombre:"Leonardo",
           apellido:"Valencia",
           Telefono:"2144141"
       },
       {
           nombre:"Julio",
           apellido:"Naranjo",
           Telefono:"4514140"
       },
       {
           nombre:"Juan",
           apellido:"Morales",
           Telefono:"2314141"
       }
    ]
});