var myapp = angular.module('myApp');
myapp.controller('productCtrl', function ($scope, $log, productSerivce) {

    $log.info('product ctrl started');
    var self = $scope;


    function getList() {
        productSerivce.list().then(function (response) {
            self.products = response;
        })
    };
    getList();
    self.addProduct = function () {
        var data = {
            "dateCreated": "2015-11-30T23:33:30.261",
            "imageUrl": "iphone.png",
            "name": "Iphone",
            "price": 600
        };
        productSerivce.addProduct(data).then(function (response) {
            $log.info(response);
            getList();
        });
    };
});
