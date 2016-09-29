angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'A',    // EA -> element/attribute
    templateUrl: 'templates/directives/todo-table.html'
  };
});