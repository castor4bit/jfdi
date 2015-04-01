var _ = require('lodash');
var Marty = require('marty');
var TodoConstants = require('../constants/TodoConstants');

var TodoStore = Marty.createStore({
  id: 'TodoStore',

  handlers: {
    create: TodoConstants.TODO_CREATE,
    toggleComplete: TodoConstants.TODO_TOGGLE_COMPLETE_ALL,
    undoCompleteTodo: TodoConstants.TODO_UNDO_COMPLETE,
    completeTodo: TodoConstants.TODO_COMPLETE,
    updateText: TodoConstants.TODO_UPDATE_TEXT,
    destroyTodo: TodoConstants.TODO_DESTROY,
    destroyCompleted: TodoConstants.TODO_DESTROY_COMPLETED
  },

  getInitialState: function() {
    return {};
  },

  create: function(text) {
    text = text.trim();

    if (text) {
      var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
      this.state[id] = {
        id: id,
        complete: false,
        text: text
      };
      this.hasChanged();
    }
  },

  toggleComplete: function() {
    this.updateAll({
      complete: !this.areAllComplete()
    });
  },

  undoCompleteTodo: function(id) {
    this.update(id, {complete: false});
  },

  completeTodo: function(id) {
    this.update(id, {complete: true});
  },

  updateText: function(id, text) {
    text = text.trim();
    if (text !== '') {
      this.update(id, {text: text});
    }
  },

  update: function(id, props) {
    this.state[id] = _.extend({}, this.state[id], props);
    this.hasChanged();
  },

  updateAll: function(props) {
    for (var id in this.state) {
      this.update(id, props);
    }
  },

  destroyTodo: function(id) {
    delete this.state[id];
    this.hasChanged();
  },

  destroyCompleted: function() {
    for (var id in this.state) {
      if (this.state[id].complete) {
        this.destroyTodo(id);
      }
    }
  },

  areAllComplete: function() {
    for (var id in this.state) {
      if (!this.state[id].complete) {
        return false;
      }
    }

    return true;
  }
});

module.exports = TodoStore;
