var Marty = require('marty');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = Marty.createActionCreators({
  id: 'TodoActions',

  create: function(text) {
    this.dispatch(TodoConstants.TODO_CREATE, text);
  },

  updateText: function(id, text) {
    this.dispatch(TodoConstants.TODO_UPDATE_TEXT, id, text);
  },

  toggleComplete: function(todo) {
    var id = todo.id;
    if (todo.complete) {
      this.dispatch(TodoConstants.TODO_UNDO_COMPLETE, id);
    } else {
      this.dispatch(TodoConstants.TODO_COMPLETE, id);
    }
  },

  toggleCompleteAll: function() {
    this.dispatch(TodoConstants.TODO_TOGGLE_COMPLETE_ALL);
  },

  destroy: function(id) {
    this.dispatch(TodoConstants.TODO_DESTROY, id);
  },

  destroyCompleted: function() {
    this.dispatch(TodoConstants.TODO_DESTROY_COMPLETED);
  }
});

module.exports = TodoActions;
