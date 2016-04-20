var myApp=angular.module('myApp', ['ngRoute']);

myApp.controller('searchController', function() {
    $scope.tagLine =  "Hola!";

});

/*myApp.config(function ($routeProvider) {

  $routeProvider
    .when('/', {templateUrl: 'index.html'})
    .when('/2', {templateUrl: 'first.html', controller: 'searchController'})
    .otherwise({redirectTo: '/'});

});*/
