var app= angular.module("App",[]);

app.service("Servicio",["$http","$q",function($http,$q)
                       {
                           var defer=$q.defer();
                           this.Paises = function()
                           {
                               $http.get("http://restcountries.eu/rest/v1/region/africa").success(function(data){
                                   defer.resolve(data);
                               })
                               .error(function(err)
                                     {
                                   console.log(err);
                               });
                               return defer.promise;
                           }
}]);

app.controller("controladorService",["Servicio","$scope",function(Servicio,$scope)
                                    {
                                        var objeto = Servicio.Paises();
                                        objeto.then(function(pais)
                                                   {
                                            $scope.paises= pais;
                                        });
                                    }]);
                                        
                                        
                                        
                                        
                                        
                                        
                                        