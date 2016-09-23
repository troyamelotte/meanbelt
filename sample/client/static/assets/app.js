var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push(function($q, $location){
    return{
     'responseError': function(rejection){
      if (rejection.status == 401){
                $location.url('/');
      }
      return $q.reject(rejection);
     }
    }
  })
      $routeProvider
      .when('/', {
        templateUrl:'partials/login.html'
      })
      .when('/main', {
        templateUrl:'partials/main.html'
      })
      .when('/new_question',{
        templateUrl:'partials/new_question.html'
      })
      .when('/show/:id',{
        templateUrl:'partials/show.html'
      })
      .when('/answer/:id',{
        templateUrl:'partials/new_answer.html'
      })
      .otherwise({
        redirectTo: '/'
      })
    })
