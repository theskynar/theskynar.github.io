angular
    .module('skynar')
    .controller('contactController', function($scope, $http){

      $scope.sendMail = function(event, mail){
        event.preventDefault();
        $('.spinner').show();

        $http.post('https://skynar.herokuapp.com/email', mail)
          .success(function(){
            sendAlert('Email enviado com sucesso, agradecemos seu contato!','info','bottom');
          })
          .error(function(err){
            sendAlert('<strong>Ops</strong>, erro ao enviar...','danger','bottom');
          })
          .finally(function(){
            delete $scope.msg;
            $('.spinner').hide();
          });

      }

    });
