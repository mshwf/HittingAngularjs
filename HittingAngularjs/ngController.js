﻿var app = angular.module('myApp', []);
app.directive('meInRed', function () {
    return {
        template: "<h1 style='color:red;'>Hello</h1>"
    };
});
app.filter('properName', function () {
    return function (x) {
        var newName = '';
        newName += x[0].toUpperCase();
        for (var i = 1; i < x.length; i++) {
            if (x[i - 1] == ' ') {
                newName += x[i].toUpperCase();
            }
            else {
                newName += x[i].toLowerCase();
            }
        }
        return newName;
    }
});
app.filter('toNum', function () {
    return function (x) {
        return !isNaN(x) ? x : parseInt(x);
    }
});
app.service('mySvc', function () {
    this.fun = function (s) {
        return s.toString(16);
    }
})
app.controller('myController', function ($scope, $http, $timeout, $interval, mySvc) {
    $scope.people = [{ name: 'Ahmed', age: 28 }, { name: 'Tawfeeq', age: 55 }, { name: 'Samya', age: 22 }
    , { name: 'Sohaib', age: 18 }, { name: 'Akram', age: 12 }, { name: 'Hamdy', age: 80 }, { name: 'Zeinab', age: 8 }];
    $scope.names = ['Tareq', 'Ahmed', 'Masaod', 'Sobhy', 'Rehab', 'Lamiaa'];
    $scope.getName = function () {
        $scope.Name = {
            first: $scope.fName, second: $scope.lName
        }
    };
    $http.get('Testy.html').then(function (response) {
        $scope.httpDone = response.data;
        $scope.sayHello = "He never said it";
        $timeout(function () {
            $scope.sayHello = "Then he said Hello!";
        }, 3000);
        $interval(function () {
            $scope.time = new Date().toLocaleTimeString()

        }, 1000)
        $scope.hex = mySvc.fun;
    });
    $scope.local = "I'm local.";
    $scope.orderItBy = function (x) {
        $scope.ord = x;
    }

});
app.controller('anotherCtrl', function ($rootScope) {
    $rootScope.global = "I'm global";
});
