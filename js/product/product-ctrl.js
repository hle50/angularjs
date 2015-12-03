var myapp = angular.module('myApp');
myapp.controller('productCtrl', function ($scope, $log, productSerivce) {

	$log.info('product ctrl started');
	var self = $scope;
	var runtimeURL = "http://127.0.0.1:8080/rest/webapi/product";

	function getList() {
		productSerivce.getData(runtimeURL).then(function (response) {
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
		productSerivce.addProduct(runtimeURL, data).then(function (response) {
			$log.info(response);
			getList();
		});
	};
});
