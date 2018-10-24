'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
        //Ajout de loading class
        elem.addClass(attr.loadingClass)

        function isImageInView() {
          var clientHeight = document.documentElement.clientHeight,
              clientWidth = document.documentElement.clientWidth,
              imageRect = elem[0].getBoundingClientRect();
    
            if (
              imageRect.top < (window.pageYOffset + window.innerHeight) &&
              imageRect.left < (window.pageXOffset + window.innerWidth) &&
              (imageRect.top + imageRect.height) > window.pageYOffset &&
              (imageRect.left + imageRect.width) > window.pageXOffset
             ) {
    
            elem[0].style["background-image"] = "url("+scope.lpcLazyBackground+") ";
    
            var img = new Image();
            //Si le chargement de l'image est terminé alors il faut enelever loading class
            img.onload = function() {
              elem.removeClass(attr.loadingClass)
            }
            img.src = scope.lpcLazyBackground;
            if (img.complete){
              img.onload();
            }
    
            removeEventListeners();
          }
    
        }
        function removeEventListeners() {
          window.removeEventListener('scroll', isImageInView);
          window.removeEventListener('resize', isImageInView);
        }
    
        window.addEventListener('scroll', isImageInView);
        window.addEventListener('resize', isImageInView);
    
    
        elem.on('$destroy', function() {
          removeEventListeners();
        });
    
        isImageInView();
  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);
