'use strict';

jest.dontMock('../12_comment.js');
jest.dontMock('../12_commentlist.js');

describe('CommentListTest', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  var CommentList = require('../12_commentlist.js');

  var commentList;
  var data = [
    { author: 'aaa', text: 'sample1' },
    { author: 'bbb', text: 'sample2' },
    { author: 'ccc', text: 'sample3' }
  ];

  beforeEach(function() {
    commentList = TestUtils.renderIntoDocument(<CommentList data={data} />);
  });

  describe('各コメントがレンダリングされる', function() {
    it ('コメントが3件出力されている', function() {
      var div = TestUtils.scryRenderedDOMComponentsWithClass(commentList, 'comment');
      expect(div.length).toEqual(3);
    });
  });
});
