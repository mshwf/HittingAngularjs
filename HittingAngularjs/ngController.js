var app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http, $timeout, $interval, mySvc) {
    $scope.getCords = function (ev) {
        $scope.x = ev.clientX;
        $scope.y = ev.clientY;
    };
    $scope.result = 0;
    $scope.hex = mySvc.fun;
    $scope.colors = { b: "blue", r: "red", g: "green", y: "yellow" };
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
    });
    $scope.local = "I'm local.";
    $scope.orderItBy = function (x) {
        $scope.ord = x;
    }

});
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
//Applying service in filter
app.filter('toHexa', ['mySvc', function (mySvc) {
    return function (x) {
        return mySvc.fun(x);
    };
}]);
app.service('mySvc', function () {
    this.fun = function (s) {
        return s.toString(16);
    }
})

app.controller('anotherCtrl', function ($rootScope) {
    $rootScope.global = "I'm global";
});
