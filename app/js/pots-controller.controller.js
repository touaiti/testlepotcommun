'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        //TODO
        $scope.init = function () {

            //chargement de la derniére langue choisie deouis le storage
            $scope.locale = window.localStorage['locale'] || "fr"

            //chargment de liste des pots
            PotsService.get().then( function(pots) {
                $scope.pots = pots.data
            }, function(reason) {
                console.log("error occured");
            }, function(value) {
                console.log("no callback");
            })
        }

        $scope.init();

        $scope.changeLocale = function(locale) {        
            $scope.locale = locale
            //sauvegrade de la langue choisie dans le storage
            
            window.localStorage['locale'] = locale
        }
    }]);
