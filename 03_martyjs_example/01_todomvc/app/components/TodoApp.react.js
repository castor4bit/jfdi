var React = require('react');
var Marty = require('marty');

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var TodoStore = require('../stores/TodoStore');

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.props.allTodos}
          areAllComplete={this.props.areAllComplete} />
        <Footer allTodos={this.props.allTodos} />
      </div>
    );
  }
});

module.exports = Marty.createContainer(TodoApp, {
  listenTo: TodoStore,
  fetch: {
    allTodos() {
      return TodoStore.getState();
    },
    areAllComplete() {
      return TodoStore.areAllComplete();
    }
  }
});
