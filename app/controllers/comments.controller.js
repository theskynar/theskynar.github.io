angular
    .module('skynar')
    .controller('commentsController', function($scope){

      $scope.init = slider;
      $scope.callNext = function(){
        thisInterval();
        clearInterval(interval);
        interval = setInterval(thisInterval,delay);
      }
      $scope.callAnt = function(){
        reverseInterval();
        clearInterval(interval);
        interval = setInterval(thisInterval,delay);
      }

    });
