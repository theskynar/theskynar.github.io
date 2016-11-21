angular.module('skynar', []);angular
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
angular
    .module('skynar')
    .controller('portController', function($scope, $http){

        $scope.works = [
            {
                nome: 'Crescimentum',
                imagem: 'Crescimentum.jpg',
                descricao: 'Painel e sistema de inscrição de cursos e controle de material.',
                link: 'http://crescimentum.com.br',
                galeria: 'https://flic.kr/s/aHskLcJ42f'
            },
            {
                nome: 'WeApp',
                imagem: 'weapp.jpg',
                descricao: 'WebSite, dashboard e aplicativo IOS e Android.',
                link: 'http://weappm.com.br',
                galeria: 'https://flic.kr/s/aHskLcJ42L'
            },
            {
                nome: 'Andrea Rosany',
                imagem: 'ar.png',
                descricao: 'Portfolio de Arquitetura.',
                link: '#port',
                galeria: 'https://flic.kr/s/aHskNnjsQ3'
            }
        ];

    });angular
    .module('skynar')
    .controller('teamController', function($scope){

        $('.collapse').collapse();

    });