app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');

    $routeProvider
//    .when('/',{
//        templateUrl: 'app/views/home.template.html',
//        controller: 'HomeController'
//    })
    .when('/income',{
        templateUrl: 'app/views/income_page.template.html',
        controller: 'IncomeController'
    });
//   .otherwise('/');
}])
