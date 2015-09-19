var crudControllers = angular.module('crud.controllers', []);

crudControllers.controller('MainCtrl', MainCtrl);
crudControllers.controller('NewTodoCtrl', NewTodoCtrl);

function MainCtrl(TodoService, $ionicListDelegate) {
  this.todos = TodoService.all();
  this.complete = function(todo) {
    TodoService.remove(todo);
  };
}

function NewTodoCtrl(TodoService, $ionicHistory) {
  this.createTask = function(todoTask) {
    var newTodo = {};
    if (todoTask) {
      newTodo = {
        name: todoTask,
        completed: false
      };
      TodoService.add(newTodo);
      $ionicHistory.goBack();
    }
  }
};
