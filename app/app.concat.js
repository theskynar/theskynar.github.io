angular.module('skynar', []);angular
    .module('skynar')
    .controller('contactController', function($scope, $http){

    });angular
    .module('skynar')
    .controller('portController', function($scope, $http){

        $scope.works = [
            {
                nome: 'Crescimentum',
                imagem: 'Crescimentum.jpg',
                descricao: 'Painel e sistema de inscrição de cursos e controle de material.',
                link: 'http://crescimentum.com.br',
                galeria: 'https://www.flickr.com/photos/149118044@N04/'
            },
            {
                nome: 'WeApp',
                imagem: 'weapp.jpg',
                descricao: 'WebSite, dashboard e aplicativo IOS e Android.',
                link: 'http://weappm.com.br',
                galeria: 'https://www.flickr.com/photos/149118044@N04/'
            },
            {
                nome: 'Crescimentum',
                imagem: 'Crescimentum.jpg',
                descricao: 'Painel e sistema de inscrição de cursos e controle de material.',
                link: 'http://crescimentum.com.br',
                galeria: 'https://www.flickr.com/photos/149118044@N04/'
            },
            {
                nome: 'WeApp',
                imagem: 'weapp.jpg',
                descricao: 'WebSite, dashboard e aplicativo IOS e Android.',
                link: 'http://weappm.com.br',
                galeria: 'https://www.flickr.com/photos/149118044@N04/'
            }
        ];

    });angular
    .module('skynar')
    .controller('teamController', function($scope){

        $('.collapse').collapse();

    });