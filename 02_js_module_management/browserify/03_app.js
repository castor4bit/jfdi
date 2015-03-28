var widget = require('./03_brfs_domify.js')();
widget.on('append', function(target) {
  console.log('appended to: ' + target.outerHTML);
});

widget.setName('Ichigo Hoshimiya');
widget.setMessage('Aikatsu!');
widget.appendTo('#container');
