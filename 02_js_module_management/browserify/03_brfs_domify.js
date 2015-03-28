var fs = require('fs');
var domify = require('domify');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

var html = fs.readFileSync(__dirname + '/03_widget.html', 'utf8');

inherits(Widget, EventEmitter);
module.exports = Widget;

function Widget(opts) {
  if (!(this instanceof Widget)) return new Widget(opts);
  this.element = domify(html);
}

Widget.prototype.appendTo = function(target) {
  if (typeof target === 'string') target = document.querySelector(target);
  target.appendChild(this.element);
  this.emit('append', target);
};

Widget.prototype.setName = function(name) {
  this.element.querySelector('.name').textContent = name;
};

Widget.prototype.setMessage = function(msg) {
  this.element.querySelector('.msg').textContent = msg;
};

// npm install fs domify inherits
// npm install brfs
// browserify -t brfs 03_app.js -o 03_app_bundle.js
// watchify   -t brfs 03_app.js -o 03_app_bundle.js
