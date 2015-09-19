angular.module('crud.services', [])
  .service('TodoService', TodoService);

function TodoService() {
  this.todos = [{
    name: 'Learn Ionic',
    completed: false
  }, {
    name: '???',
    completed: false
  }, {
    name: 'Profit',
    completed: false
  }];
}

TodoService.prototype.all = function() {
  return this.todos
};

TodoService.prototype.add = function(newItem) {
  this.todos.push(newItem);
  // todos.unshift(newItem);
};

TodoService.prototype.remove = function(todo) {
  this.todos.splice(this.todos.indexOf(todo), 1);
};
