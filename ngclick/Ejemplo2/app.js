var MiApp=angular.module("App",[]);

MiApp.controller("controladorSuma",function($scope)
                {
   $scope.cont=0;
    $scope.contar=function()
    {
        $scope.cont++;
    }
});