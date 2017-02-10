angular.module('Controllers', ['ngResource'])
    .controller('MainController', ['$scope', '$rootScope', '$resource', '$location', '$localStorage', '$sessionStorage', 'Main', 'keyboardManager', '$route',
        function($scope, $http, $resource, $localStorage, $sessionStorage, $location, Main, keyboardManager, $timeout, $route) {

        if(window.location.pathname.split('/')[1] == 'about') {
            $scope.aboutPageActive = true;
        } else {
            $scope.aboutPageActive = false;
        }
        if (window.location.pathname.split('/')[1] == 'preview' || window.location.pathname.split('/')[1] == 'admin') {
            $(' .left-panel ').addClass('preview-active');
        } else {
            $(' .left-panel').removeClass('preview-active');
        }

        $scope.signin = function() {
            var formData = {
                password: $scope.password
            }
            Main.signin(formData, function(res) {
                if (res.success == false) {
                    $scope.message = {
                        text: res.message,
                        status: 'error'
                    };
                } else {
                    window.location = "/admin/home";
                    $scope.message = {
                        text: res.message,
                        status: 'success'
                    };
                    $sessionStorage.harryToken = res.token;
                    $sessionStorage.$save();
                }
            }, function() {
                $rootScope.error = 'Failed to signin';
            })
        };

        $scope.auth = function() {
            return $scope.user.harry === 'Harry';
        };

        $scope.user = Main.currentUser();
        $scope.token = Main.getToken();
 
        $scope.logout = function() {
            Main.logout(function() {
                window.location = "/";
            }, function() {
                alert("Failed to logout!");
            });
        };

        $scope.keyCode = "";
        $scope.keyPressed = function(e) {
            $scope.keyCode = e.which;
        };
        $scope.Math = window.Math;

        // KEYBOARD SHORTCUTS

        keyboardManager.bind('home', function() {
            window.location = '/login';
        });
        keyboardManager.bind('end', function() {
            $scope.logout();
        });

    }])
    .controller('FrontendCtrl', ['$scope', '$sce', '$filter', '$rootScope', '$resource', '$location', '$localStorage', '$sessionStorage', 'Main', 'keyboardManager', '$route',
        function($scope, $sce, $filter, $http, $resource, $localStorage, $sessionStorage, $location, Main, keyboardManager, $timeout, $route) {

        $scope.sites = [
            {   id: 'bulgasnet', 
                for: 'clients',
                name: 'BulGasNet', 
                url: 'http://www.bulgasnet.com/', 
                date: 'August 2016', 
                responsive: false,
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #563D7E;">LESS</span>, <span style="color: #4B376C;">Bootstrap</span>, <span style="color: #e7b500;">JQuery</span>', 
                job: 'Whole front-end work and embeded PHP; Backend on Wordpress by <a href="http://weband.bg/" target="_blank">WebAnD</a>', 
                designs: [ { url: 'bulgasnet-home.jpg' }, { url: 'bulgasnet-mission.jpg' }, { url: 'bulgasnet-members.jpg' }, { url: 'bulgasnet-contacts.jpg' } ] 
            },
            {   id: 'fotag', 
                for: 'clients',
                name: 'Fotag', 
                url: 'https://fotag.io/', 
                responsive: true,
                date: 'October 2015', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #CC6699;">SASS</span>, <span style="color: #e7b500;">JQuery</span>', 
                job: 'Free-lance front-end work; Design by <a href="http://leteyski.com/" target="_blank">Leteyski</a>', 
                designs: [ 
                    { url: 'listings.png' }, 
                    { url: 'listings-copied.png' }, 
                    { url: 'listings-create.png' }, 
                    { url: 'listings-grid.png' },
                    { url: '1-edit.png' },
                    { url: '2-edit-UploadField.png' },
                    { url: '4-edit-theme.png' },
                    { url: 'agencyadmin.png' },
                    { url: 'learning.png' },
                    { url: 'learning-contact.png' },
                    { url: 'learning-expand.png' },
                    { url: '1-account.png' },
                    { url: '2-account-edit.png' },
                    { url: '6-account-discount.png' }
                ]
            },
            {   id: 'prego', 
                for: 'clients',
                name: 'PREGO Kitchens', 
                url: 'http://kuhniprego.com/', 
                responsive: true,
                date: 'December 2015', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #563D7E;">LESS</span>, <span style="color: #e7b500;">JQuery</span>', 
                job: 'Free-lance front-end work for whole design',
                designs: [
                    { url: 'home.jpg' },
                    { url: 'kuhnq_rain.jpg' },
                    { url: 'aboutus.jpg' },
                    { url: 'prego_life.jpg' },
                    { url: 'contacts.jpg' }
                ]
            },
            {   id: 'success-academy', 
                for: 'clients',
                name: 'Success Academy', 
                url: 'http://successacademy.bg/', 
                responsive: true,
                date: 'August 2015', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #563D7E;">LESS</span>, <span style="color: #4B376C;">Bootstrap</span>, <span style="color: #e7b500;">JQuery</span>', 
                job: 'Free-lance front-end work for whole design; Design by <a href="http://leteyski.com/" target="_blank">Leteyski</a>',
                designs: [
                    { url: 'home.jpg' },
                    { url: 'about.jpg' },
                    { url: 'training.jpg' },
                    { url: 'training-single.jpg' }
                ]
            },
            {   id: 'io-sim', 
                for: 'io',
                name: 'Imperia Online - Army Simulator', 
                url: 'http://imperiaonline.org/', 
                date: 'June 2014', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #e7b500;">JQuery</span>', 
                job: 'Frontend Modal popup made during Imperia Online Internship; First use of JQuery to make complex interactions',
                designs: [ ]
            },
            {   id: 'io-fam', 
                for: 'io',
                name: 'Imperia Online - Imperial Family', 
                url: 'http://imperiaonline.org/', 
                date: 'June 2014', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #e7b500;">JQuery</span>', 
                job: 'Frontend Modal popup made during Imperia Online Internship',
                designs: [ ]
            },
            {   id: 'io-center', 
                for: 'io',
                name: 'Imperia Online - Command Center', 
                url: 'http://imperiaonline.org/', 
                date: 'June 2014', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #e7b500;">JQuery</span>', 
                job: 'Frontend Modal popup made during Imperia Online Internship;',
                designs: [ ]
            },
            {   id: 'slateup', 
                for: 'slicecrowd',
                name: 'SlateUp - Course Project', 
                responsive: true,
                date: 'December 2013', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>', 
                job: 'Frontend slicing course project for SliceCrowd Academy; Score 10/10',
                designs: [ {url: 'search-results-1200-up.jpg'}, {url: 'search-results-1024-1200.jpg'}, {url: 'search-results-768-1024.jpg'}, {url: 'search-results-below-768.jpg'} ]
            },
            {   id: 'mobile-spy', 
                for: 'slicecrowd',
                name: 'Mobile Spy - Final Project', 
                date: 'December 2013', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>', 
                job: 'Final frontend slicing project for SliceCrowd Academy; Score 10/10',
                designs: [ {url: 'slicecrowdProject.jpg'} ]
            },
            {   id: 'fashion-shop', 
                for: 'devin',
                name: 'Fashion Shop', 
                date: 'April 2014', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #563D7E;">LESS</span>, <span style="color: #4B376C;">Bootstrap</span>', 
                job: '1st place for slicing 2 webpages from PSDs in just 7 hours.',
                designs: [ {url: '01-Fashion-Shop-Home.jpg'}, {url: '02-Fashion-Shop-Category-view2.jpg'} ]
            },
            {   id: 'ismena', 
                for: 'devin',
                name: 'Ismena Hotel', 
                url: 'http://ismena.bg/', 
                date: 'April 2015', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #563D7E;">LESS</span>, <span style="color: #4B376C;">Bootstrap</span>', 
                job: '2nd place for slicing webpage from PSD in just 7 hours.',
                designs: [ {url: '01-Homepage.jpg'} ]
            }
        ];

        if (window.location.pathname.split('/')[1] == 'preview') {
            $scope.website = $filter('filter')($scope.sites, {id: window.location.pathname.split('/')[3]})[0];
            $scope.websiteUrl = '../content/frontend/' + $scope.website.id + '/index.html';
            $scope.trustedUrl = $sce.trustAsResourceUrl($scope.websiteUrl);
        }

        $(' iframe ').removeClass('md').removeClass('sm').removeClass('xs-ls').removeClass('xs');
        $(' .res-btns ').removeClass('active');

        $scope.setFrameWidth = function (width) {
            $(' iframe ').removeClass('md').removeClass('sm').removeClass('xs-ls').removeClass('xs');
            $(' iframe ').addClass(width);
            $(' .res-btns ').removeClass('active');
            $(' .res-btn-' + width).addClass('active');
        };


        $scope.tab = 0;

        $scope.selectTab = function(setTab) {
            $scope.tab = setTab;
        };

        $scope.isSelected = function(checkTab) {
            return $scope.tab === checkTab;
        };

    }])
    .controller('BackendCtrl', ['$scope', '$sce', '$filter', '$rootScope', '$resource', '$location', '$localStorage', '$sessionStorage', 'Main', 'keyboardManager', '$route',
        function($scope, $sce, $filter, $http, $resource, $localStorage, $sessionStorage, $location, Main, keyboardManager, $timeout, $route) {

        $scope.sites = [
            {   id: 'photography', 
                name: 'Photographer Portfolio Web App', 
                date: 'September 2015 - January 2016', 
                responsive: true,
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #563D7E;">LESS</span>, <span style="color: #e7b500;">JQuery</span>, <span style="color: #C4473A;">AngularJS</span>, <span style="color: #90C53F;">NodeJS</span>/<span style="color: #a3c0d6;">ExpressJS</span>, <span style="color: #967855;">MongoDB</span>', 
                job: 'A flexible and rich photographer portfolio web app. Design, frontend and backend all done by me. <span style="color: #90C53F;">NodeJS</span> used only to communicate with the <span style="color: #967855;">MongoDB</span> database and the <span style="color: #C4473A;">AngularJS</span> app acts as an indepentent API. Every functionality and feature of the CMS is custom made on Angular.',
                desc: 'A lot of things'
            },
            {   id: 'itfox', 
                name: 'ITFox', 
                date: 'June 2016', 
                tech: '<span style="color: #EF652A;">HTML5</span>, <span style="color: #2BA8E0;">CSS3</span>, <span style="color: #563D7E;">LESS</span>, <span style="color: #e7b500;">JQuery</span>, <span style="color: #C4473A;">AngularJS</span>, <span style="color: #6C7EB7;">PHP</span>/<span style="color: #FA503B;">Laravel</span>, <span style="color: #E57911;">MySQL</span> ', 
                job: 'A web app created for a startup competition. Design, frontend and <span style="color: #C4473A;">AngularJS</span> API done by me. Backend on <span style="color: #6C7EB7;">PHP</span>/<span style="color: #FA503B;">Laravel</span> in collaboration with <a href="http://weband.bg/" target="_blank">WebAnD</a>.',
                desc: 'A lot of things'
            }
        ];

        if (window.location.pathname.split('/')[1] == 'preview') {
            $scope.website = $filter('filter')($scope.sites, {id: window.location.pathname.split('/')[3]})[0];
            $scope.websiteUrl = '../content/frontend/' + $scope.website.id + '/index.html';
            $scope.trustedUrl = $sce.trustAsResourceUrl($scope.websiteUrl);
        }

        $(' iframe ').removeClass('md').removeClass('sm').removeClass('xs-ls').removeClass('xs');
        $(' .res-btns ').removeClass('active');

        $scope.setFrameWidth = function (width) {
            $(' iframe ').removeClass('md').removeClass('sm').removeClass('xs-ls').removeClass('xs');
            $(' iframe ').addClass(width);
            $(' .res-btns ').removeClass('active');
            $(' .res-btn-' + width).addClass('active');
        };


        $scope.tab = 0;

        $scope.selectTab = function(setTab) {
            $scope.tab = setTab;
        };

        $scope.isSelected = function(checkTab) {
            return $scope.tab === checkTab;
        };

    }])
    .controller('AdminCtrl', ['$scope', '$sce', '$filter', '$rootScope', '$resource', '$location', '$localStorage', '$sessionStorage', 'Main', 'keyboardManager', '$route',
        function($scope, $sce, $filter, $http, $resource, $localStorage, $sessionStorage, $location, Main, keyboardManager, $timeout, $route) {



    }])



    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])

;