var React = require('react');

var TodoTextInput = require('./TodoTextInput.react');

var Header = React.createClass({
  render: function() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this.onSave}
        />
      </header>
    );
  },

  onSave: function(text) {
    if (text.trim()) {
      //
    }
  }
});

module.exports = Header;
