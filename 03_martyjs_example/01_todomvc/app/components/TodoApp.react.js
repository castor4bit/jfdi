var React = require('react');

var Footer = require('./Footer.react');
var Header = require('./Header.react');

var TodoApp = React.createClass({
  render: function() {
    var allTodos = {};
    return (
      <div>
        <Header />
        <Footer allTodos={allTodos} />
      </div>
    );
  }
});

module.exports = TodoApp;
