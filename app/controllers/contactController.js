angular
    .module('skynar')
    .controller('contactController', function($scope, $http){

      $scope.message = 0;

      $scope.sendMail = function(event, mail){
        event.preventDefault();
        $('.spinner').show();

        $http.post('https://skynar.herokuapp.com/email', mail)
          .success(function(){
            $scope.message = 1;
          })
          .error(function(err){
            $scope.message = 2;
          })
          .finally(function(){
            $('.spinner').hide();
            setTimeout(function(){
              $scope.message = 0;
            }, 2000);
          })

      }

    });
