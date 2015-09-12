var crudControllers = angular.module('crud.controllers', []);

crudControllers.controller('MainCtrl', MainCtrl);
crudControllers.controller('NewTodoCtrl', NewTodoCtrl);

function MainCtrl(Todos, $ionicListDelegate) {
  var main = this;

  main.todos = Todos.all();

  main.complete = function(todo) {
    todo.completed = !todo.completed;
    $ionicListDelegate.closeOptionButtons();
  };
}

function NewTodoCtrl(Todos, $ionicHistory) {
  var todo = this;
  todo.todoList = Todos.all();
  var newTodo = {};

  todo.createTask = function(todoTask) {
    if (todoTask) {
      newTodo = {
        name: todoTask,
        completed: false
      };
      todo.todoList.push(newTodo);
      $ionicHistory.goBack();
    }
  }
}
