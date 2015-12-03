'use strict'
var coreModule = angular.module('coreModule', []);
coreModule.service('coreService', function ($http, $log, $q) {
	function CoreSerivce() {

	};
	CoreSerivce.prototype.getData = function (runtimeUrl) {
		var defered = $q.defer();
		$http({
			method: 'GET',
			url: runtimeUrl,

		}).success(function (data) {
			// With the data succesfully returned, we can resolve promise and we can access it in controller
			defered.resolve(data);

		}).error(function () {
			alert("error");
			//let the function caller know the error
			defered.reject(data);
		});
		return defered.promise;
		$log.info(runtimeUrl);
	}

	CoreSerivce.prototype.addProduct = function (runtimeUrl, data) {
		return $http({
			method: 'POST',
			url: runtimeUrl,
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
	return {
		CoreSerivce: CoreSerivce
	}


});

function inheritPrototype(prototype) {
	function F() {}; // Dummy constructor
	F.prototype = prototype;
	return new F();
}

function inherit(parentClazz, childClazz) {
	childClazz.prototype = inheritPrototype(parentClazz.prototype);
	childClazz.prototype.constructor = childClazz;
}

function extend(srcClazz, destClazz) {
	for (var k in srcClazz.prototype) {
		if (srcClazz.prototype.hasOwnProperty(k)) {
			destClazz.prototype[k] = srcClazz.prototype[k];
		}
	}
	destClazz.prototype = inheritPrototype(destClazz.prototype);
}
