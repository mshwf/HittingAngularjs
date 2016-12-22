var HittingAngularjs = angular.module('HittingAngularjs', ['ngRoute']);

HittingAngularjs.config(function ($routeProvider) {
    $routeProvider.
        when('/RouteOne', {
            templateUrl: 'RoutesDemo/One'
        })
        .when('/RouteTwo', {
            templateUrl: 'RoutesDemo/Two'
        })
        .when('/RouteThree', {
            templateUrl: 'RoutesDemo/Three'
        });
});
HittingAngularjs.controller('LandingPageController', LandingPageController);
