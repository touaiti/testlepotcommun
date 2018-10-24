'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        
        LpcTranslateService.loadProperties().then( function(properties) {
            $rootScope.properties = properties.data
        }, function(reason) {
            console.log("error occured while getting properties");
        }, function(value) {
            console.log("no callback");
        });

        var filter = function(key,locale){
            return $rootScope.properties[locale][key]
        }
        return filter;
    }]);
