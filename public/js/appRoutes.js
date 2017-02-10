angular.module('appRoutes', ['ngStorage'])
	.config(['$routeProvider', '$httpProvider','$locationProvider', 
		function($routeProvider, $httpProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			controller: 'MainController'
		})
		.when('/frontend', {
			templateUrl: 'views/frontend.html',
			controller: 'MainController'
		})
		.when('/backend', {
			templateUrl: 'views/backend.html',
			controller: 'MainController'
		})
		.when('/design', {
			templateUrl: 'views/design.html',
			controller: 'MainController'
		})
		.when('/photography', {
			templateUrl: 'views/photography.html',
			controller: 'MainController'
		})
		.when('/preview/frontend/:page', {
			templateUrl: 'views/frontend-preview.html',
			controller: 'MainController'
		})
		.when('/preview/backend/:page', {
			templateUrl: 'views/backend-preview.html',
			controller: 'MainController'
		})
		.when('/preview/design/:page', {
			templateUrl: 'views/design-preview.html',
			controller: 'MainController'
		})
		.when('/preview/photography/:page', {
			templateUrl: 'views/photography-preview.html',
			controller: 'MainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'MainController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'MainController'
		})
		.when('/contacts', {
			templateUrl: 'views/contacts.html',
			controller: 'MainController'
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'MainController'
		})
		.when('/admin/home', {
			templateUrl: 'views/dashboard.html',
			controller: 'MainController'
		})
		.when('/admin/stats', {
			templateUrl: 'views/stats.html',
			controller: 'MainController'
		})
		.when('/admin/server', {
			templateUrl: 'views/backdoor.html',
			controller: 'MainController'
		})
		;

	$locationProvider.html5Mode(true);

	$httpProvider.interceptors.push(['$q', '$location', '$localStorage', '$sessionStorage', '$rootScope', 
		function($q, $location, $localStorage, $sessionStorage, $rootScope) {
            return {
                'request': function (config) {
                    if ($localStorage.harryToken) {
                        config.headers['x-access-token'] = $localStorage.harryToken;
                        config.headers.Authorization = $localStorage.harryToken;
                    	console.log($localStorage.harryToken);
                    }
                    return config;
                },
                'responseError': function(res) {
                    if(res.status === 401 || res.status === 403) {
                        $location.path('/error');
                    	$rootScope.message = res.data.message;	
                    	$rootScope.resStatus = res.status;	
                    }
                    return $q.reject(res);
                }
            };
        }]);


}]);

