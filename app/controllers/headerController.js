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
