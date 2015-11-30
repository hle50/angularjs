var myapp = angular.module('myApp');
myapp.service('productSerivce', function ($http, $log, $q) {


    $log.info('product service');
    var runtimeURL = "http://127.0.0.1:8080/rest/webapi/product";
    var self = this;
    
    var item;
    self.list = function () {
        var defered = $q.defer();
        $http({
            method: 'GET',
            url: runtimeURL,

        }).success(function (data) {
            // With the data succesfully returned, we can resolve promise and we can access it in controller
            defered.resolve(data);

        }).error(function () {
            alert("error");
            //let the function caller know the error
            defered.reject(data);
        });
        return defered.promise;
    };
    self.addProduct = function (data) {
        return $http({
            method: 'POST',
            url: runtimeURL,
            cache: false,
            data: data,
            headers: {
                'Content-Type': 'application/json'
            },
        }).success(function (data) {
            // With the data succesfully returned, we can resolve promise and we can access it in controller

        }).error(function () {
            alert("error");
            //let the function caller know the error

        });

    }


})
