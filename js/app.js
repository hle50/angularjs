'use strict';
var myapp = angular.module('myApp', ["ui.router", "coreModule"])
myapp.config(function ($stateProvider, $urlRouterProvider) {

	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/product")

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "../template/home.html"
		})

	.state('product', {
		url: "/product",
		templateUrl: "../template/product.html"
	})

})
