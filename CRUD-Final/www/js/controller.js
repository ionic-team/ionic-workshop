var crudControllers = angular.module('crud.controllers', []);

crudControllers.controller('MainCtrl', MainCtrl);
crudControllers.controller('NewTodoCtrl', NewTodoCtrl);

// function MainCtrl(Todos, $ionicListDelegate) {
//   var main = this;
//
//   main.todos = Todos.all();
//
//   main.complete = function(todo) {
//     todo.completed = !todo.completed;
//     $ionicListDelegate.closeOptionButtons();
//   };
// }

function MainCtrl(Todos, $ionicListDelegate) {
  var main = this;
  main.todos = Todos.all();
  main.complete = function(todo) {
    todo.completed = !todo.completed;
    $ionicListDelegate.closeOptionButtons();
  };
}

function NewTodoCtrl(Todos, $ionicHistory) {
  this.createTask = function(todoTask) {
    var newTodo = {};
    if (todoTask) {
      newTodo = {
        name: todoTask,
        completed: false
      };
      Todos.add(newTodo);
      $ionicHistory.goBack();
    }
  }
};
