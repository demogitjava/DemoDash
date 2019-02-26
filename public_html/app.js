var routerApp = angular.module('webApp', ['ui.router', 'ngRoute']);

routerApp.config(function($stateProvider, $urlRouterProvider)
{

    $urlRouterProvider.otherwise('/home');


        /*
        .state('home', {
            url: '/home',
            templateUrl: 'domain/dashboard/dashboard.html'

        })
        */
    $stateProvider
        .state('home', 
        {
            url: '/home',
            templateUrl: 'domain/dashboard/emptydashboard.html'
        })

        // LoginController
        .state('login',
        {
          url: '/login',
          templateUrl: 'domain/login/login.html'
        });


      

        
       
}).run(function($rootScope) {
    $rootScope.baseUrl = "http://localhost:8080";
});