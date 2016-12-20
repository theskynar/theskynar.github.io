angular.module('skynar', []);angular
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

      $scope.init = function(){

        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              $("#bs-example-navbar-collapse-1").collapse('hide');
              return false;
            }
          }
        });

        if(helper.getDevice == 'sm'){

          $('#myLinks li a').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                $("#bs-example-navbar-collapse-1").collapse('hide');
                return false;
              }
            }
          });

        }

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
