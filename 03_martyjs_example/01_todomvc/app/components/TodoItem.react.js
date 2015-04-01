var React = require('react');
var cx = require('classnames');
var ReactPropTypes = React.PropTypes;

var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var TodoItem = React.createClass({
  propTypes: {
    todo: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  render: function() {
    var todo = this.props.todo;

    var input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this.onSave}
          value={todo.text}
        />;
    }

    return (
      <li
        className={cx({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}

        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this.onToggleComplete}
          />
          <label onDoubleclick={this.onDoubleclick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this.onDestroyClick} />
        </div>
        {input}
      </li>
    );
  },

  onToggleComplete: function() {
    TodoActions.toggleComplete(this.props.todo);
  },

  onDoubleclick: function() {
    this.setState({isEditing: true});
  },

  onSave: function(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  onDestroyClick: function() {
    TodoActions.destroy(this.props.todo.id);
  }
});

module.exports = TodoItem;
