var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http) {
    $http.get("http://avalon.avalonfaltd.com:3090/companies").then(function (response) {
        $scope.myData = response.data.success;
        $scope.myData.forEach(function (value, key, array) {
            if (value.companyName === null) {
                array.splice(key, 1);
            }
        });
    }, function (response) {
    }).finally(function () {
        $scope.loading = false;
    });

    $scope.delete = function ($myData, postIndex) {
        $http.delete('http://avalon.avalonfaltd.com:3090/companies/' + $myData.companyName)
            .then(function () {
                $scope.myData.splice(postIndex, 1);
            });
    };
});