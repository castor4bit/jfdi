/*eslint-env es6 */
var React = require('react');

var ImageText = React.createClass({
  onClick() {
    console.log('clicked.');
  },
  render() {
    var {text, ...other} = this.props;
    return (
      <span>{text}<img {...other} onClick={this.onClick} /></span>
    );
  }
});

React.render(
  <ImageText text="名前です" src="https://facebook.github.io/react/img/logo.svg" width="200" height="200" />,
  document.getElementById('example')
);
// browserify -t [ reactify --harmony ] 07_main.jsx -o 07_bundle.js
