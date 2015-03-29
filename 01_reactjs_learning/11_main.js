var React = require('react');
var Reactable = require('reactable');

// Reactable
// http://react-components.com/component/reactable
var Table = Reactable.Table;
var Tr = Reactable.Tr;
var unsafe = Reactable.unsafe;

React.render(
  <Table className="table" data={[
    { Name: 'Griffin Smith', Age: 18 },
    { Age: 23, Name: 'Lee Salminen' },
    { Age: 28, Position: unsafe('<i>Developer</i>') }
  ]} itemsPerPage={3} >
  <Tr className="special-row" data={{ Age: 14, Name: 'Ichigo Hoshimiya' }} />
  <Tr className="special-row" data={{ Age: 13, Name: 'Akari Oozora' }} />
  <Tr className="special-row" data={{ Age: 14, Name: 'Otome Arisugawa' }} />
  <Tr className="special-row" data={{ Age: 14, Name: 'Aoi Kiriya' }} />
  </Table>,
  document.getElementById('table1')
);

// react-ladda
// https://www.npmjs.com/package/react-ladda
var LaddaButton = require('react-ladda');

var LaddaExample = React.createClass({
  getInitialState: function() {
    return {
      active: false,
      progress: 0
    };
  },
  componentDidMount: function() {
    this.inactivate();
  },
  onClick: function() {
    this.activate();

    var timer = setInterval(function() {
      var progress = this.state.progress;
      this.setState({ progress: (progress + 0.02) });

      if (progress > 1.0) {
        clearInterval(timer);
        this.inactivate();
      }
    }.bind(this), 100);
  },
  activate: function() {
    this.setState({
      active: true,
      progress: 0,
      message: 'Now loading...'
    });
  },
  inactivate: function() {
    this.setState({
      active: false,
      message: 'Click here!'
    });
  },
  render: function() {
    return (
      <LaddaButton active={this.state.active} progress={this.state.progress} color="green" size="s" style="expand-right">
      <button onClick={this.onClick}><span>{this.state.message}</span></button>
      </LaddaButton>
    );
  }
});

React.render(
  <LaddaExample />,
  document.getElementById('example')
);


// browserify -t [ reactify --harmony ] 11_main.js -o 11_bundle.js
// watchify   -t [ reactify --harmony ] 11_main.js -o 11_bundle.js -v
