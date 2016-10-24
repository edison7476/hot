
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/roomOptions.html',
            controller:'roomController'
        })
        .otherwise({
          redirectTo: '/'
        });
});
