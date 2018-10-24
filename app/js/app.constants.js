'use strict';

angular.module('LpcWebTest2018')
  .constant('RESOURCES',(function(){
    var BASE_URL = 'https://recrutement.lepotcommuntest.fr/recruting/2018';
    return {
      PROPERTIES_URL: BASE_URL + '/get-properties',
      GET_POTS_URL: BASE_URL + '/get-pots'
    }
  })());
