'use strict';

jest.dontMock('../12_comment.js');

describe('Commentのテスト', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  var Comment = require('../12_comment.js');
  var comment;

  beforeEach(function() {
    comment = TestUtils.renderIntoDocument(<Comment author="testname" text="testtext" />);
  });

  describe('各要素が表示される', function() {
    it ('著者名が表示される', function() {
      var h2 = TestUtils.findRenderedDOMComponentWithTag(comment, 'h2');
      expect(h2.getDOMNode().textContent).toEqual('testname');
    });

    it ('テキストが表示される', function() {
      var span = TestUtils.findRenderedDOMComponentWithTag(comment, 'span');
      expect(span.getDOMNode().textContent).toEqual('testtext');
    });
  });
});
