'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        //TODO
        //rien à faire ici
        var filter = function(key,locale){
            return $rootScope.properties[locale][key] 
        }
        //TODO
        //rien à faire ici
        return filter;
    }]);
