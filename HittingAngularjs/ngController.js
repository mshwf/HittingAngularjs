var app = angular.module('myApp', []);
app.directive('meInRed', function () {
    return {
        template: "<h1 style='color:red;'>Hello</h1>"
    };
})
app.controller('myController', function ($scope) {
    $scope.people = [{ name: 'Ahmed', age: 28 }, { name: 'Tawfeeq', age: 55 }, { name: 'Samya', age: 22 }];
    $scope.getName = function () {
        $scope.Name = {
            first: $scope.fName, second: $scope.lName
        }
    };
    $scope.local = "I'm local.";
})
app.controller('anotherCtrl', function ($rootScope) {
    $rootScope.global = "I'm global";
});
