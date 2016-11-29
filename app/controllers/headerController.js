angular
    .module('skynar')
    .controller('headerController', function($scope){

      $scope.effect = function(){
        var saf = $('#saf');
        setTimeout(function(){
          saf.mouseover(function(){
            saf.removeClass('bounceInLeft').addClass('rubberBand');
          });
          saf.mouseout(function(){
            saf.removeClass('rubberBand');
          });
        },1000);
      }

    });
