var React = require('react');

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
        {this.props.author}
        </h2>
        <span>{this.props.text}</span>
      </div>
    );
  }
});

module.exports = Comment;
