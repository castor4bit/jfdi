var React = require('react');
var App = require('./10_app.js');

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
React.render(<App data={data} />, document.getElementById('app'));
