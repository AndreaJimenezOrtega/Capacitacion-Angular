var Mimodulo=angular.module("modulo",[]);

Mimodulo.controller("controller",function($scope)
                   {
    $scope.Personas=[];
    $scope.text="";
    $scope.MiFuncion=function()
    {
        if($scope.text)
            {
                $scope.Personas.push(this.text);
                $scope.text;
            }
    }
});