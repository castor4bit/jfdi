var express     = require('express');
var app         = express();
var fs          = require('fs');
var browserify  = require('browserify');
var reactify    = require('reactify');
var Handlebars  = require('handlebars');
var React       = require('react');

require('node-jsx').install({harmony: true});

var App = require('./10_app.js');
var data = [
  { id: 1, name: 'backbone' },
  { id: 2, name: 'react' },
  { id: 3, name: 'angular' }
];
var template = Handlebars.compile(fs.readFileSync('./10_index.hbs').toString());

app.get('/', function(req, res) {
  res.send(template({
    initialData: JSON.stringify(data),
    markup: React.renderToString(React.createElement(App, {data: data}))
  }));
});

app.get('/10_bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./10_main.js')
    .transform({harmony: true}, reactify)
    .bundle()
    .pipe(res);
});

var port = process.env.PORT || 5000;
console.log('listening...'+ port);
app.listen(port);
