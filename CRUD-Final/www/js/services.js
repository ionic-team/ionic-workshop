angular.module('crud.services', [])

.service('Todos', function() {
  var todos = [{
    name: 'Learn Ionic',
    completed: false
  }, {
    name: '???',
    completed: false
  }, {
    name: 'Profit',
    completed: false
  }];
  return {
    all: function() {
      return todos;
    }
  };
});
