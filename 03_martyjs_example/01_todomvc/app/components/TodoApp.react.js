var React = require('react');

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');

var TodoApp = React.createClass({
  render: function() {
    var allTodos = {};
    var areAllComplete = false;

    return (
      <div>
        <Header />
        <MainSection
          allTodos={allTodos}
          areAllComplete={areAllComplete} />
        <Footer allTodos={allTodos} />
      </div>
    );
  }
});

module.exports = TodoApp;
