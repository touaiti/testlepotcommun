'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        var filter = function(key,locale){
            return $rootScope.properties[locale][key]
        }
        return filter;
    }]);
