var app= angular.module("MiApp",[]);

app.controller("ControllerAs",function()
              {
    this.nombre="Yuly";
    this.apellido="Pino";
    this.nombreCompleto = this.nombre + this.apellido;
});