angular.module('TodoApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'TodoService',]);
 
angular.module('TodoApp').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .when('/todo', {
        templateUrl: 'templates/todo.html',
        controller: 'TodoController'
    })
    .when('/todo/edit/:id', {
        templateUrl:'templates/edit-todo.html',
        controller: 'EditTodoController'
    })
    .when('/accounts/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })
    .when('/accounts/logout', {
        templateUrl: 'templates/logout.html',
        controller: 'LogoutController'
    });
});

// 'TodoDirective' include this in the route config to enable directive.