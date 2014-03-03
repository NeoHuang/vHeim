var vHeimApp = angular.module('vHeimApp', [
    'ngRoute', 'ngAnimate']);
vHeimApp.config(['$routeProvider',
    function($routeProvider){
      $routeProvider.
      when('/switches', {
        templateUrl: '/partials/switchList.html',
        controller: 'SwitchListCtrl'
      }).
      when('/switchDetail/:switchId', {
        templateUrl: '/partials/switch.html',
        controller: 'SwitchDetailCtrl'
      }).
      when('/switchNew', {
        templateUrl: '/partials/switchNew.html',
        controller: 'SwitchNewCtrl'
      }).
      otherwise({
        redirectTo: '/switches'
      });
    }]);
