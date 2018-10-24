angular.module('LpcWebTest2018')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        var urlProperties = ""
        setPropertiesUrlImpl = function(url){
            urlProperties = url
        },
        loadPropertiesImpl = function(){
            //chargement de la liste des propriétés
            return $http.get(urlProperties)
        }

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);
