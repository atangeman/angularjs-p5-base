/* recommended */

// route-config.js
angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/controlle', {
            templateUrl: 'sample.html',
            controller: 'Sample',
            controllerAs: 'vm'
        });
}