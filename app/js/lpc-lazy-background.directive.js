'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    //TODO
  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);
