var React = require('react');

var Hello = React.createClass({
  render: function() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
});

React.render(
  <Hello name="React" />,
  document.getElementById('example')
);

// npm install react reactify
// browserify -t reactify 05_main.js -o 05_bundle.js
