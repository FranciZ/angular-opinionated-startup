angular.module('exampleApp', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'ngMdIcons']);

angular.module('exampleApp').config(function($stateProvider, $urlRouterProvider) {


    $stateProvider.state('app', {
        url: '/',
        views: {
            nav: {
                controller: 'NavigationCtrl',
                templateUrl: 'partial/navigation/navigation.html'
            }
        }
    });

    $stateProvider.state('app.tasks', {
        url: 'tasks',
        views:{
            'main@':{
                //controller:'TasksCtrl',
                templateUrl: 'partial/tasks/tasks.html'
            }
        }
    });

    $stateProvider.state('app.people', {
        url: 'people',
        views: {
            'main@': {
                controller: 'PeopleCtrl',
                templateUrl: 'partial/people/people.html'
            }
        }
    });

    $stateProvider.state('app.binding', {
        url: 'binding',
        views: {
            'main@': {
                controller: 'BindingCtrl',
                templateUrl: 'partial/binding/binding.html'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/binding');

});

angular.module('exampleApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
