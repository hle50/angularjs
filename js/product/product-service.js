var myapp = angular.module('myApp');
myapp.service('productSerivce', function ($http, $log, $q, coreService) {
	$log.info('product service');

	function ProductService($http, $log, $q, coreService) {
		var self = this;
		coreService.CoreSerivce.call(self);
	}

	inherit(coreService.CoreSerivce, ProductService);
	ProductService.prototype.test = function () {
		$log.debug('test');
	}
	return new ProductService($http, $log, $q, coreService);
})
