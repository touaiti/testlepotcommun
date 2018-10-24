'use strict';

angular.module('LpcWebTest2018')
    .run(['LpcTranslateService','RESOURCES',function(LpcTranslateService,RESOURCES){
        //TODO
        LpcTranslateService.setPropertiesUrl(RESOURCES.PROPERTIES_URL)
        LpcTranslateService.loadProperties()
    }]);
