angular.module('LpcWebTest2018')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        var urlProperties = ""
        $rootScope.properties = {}
        //TODO
        setPropertiesUrlImpl = function(url){
            urlProperties = url
        },
        loadPropertiesImpl = function(){
            //TODO
            //chargement de la liste des propriétés
            $http.get(urlProperties).then( function(pots) {
                $rootScope.properties = pots.data
            }, function(reason) {
                console.log("error occured while getting properties");
            }, function(value) {
                console.log("no callback");
            });
        }

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);
