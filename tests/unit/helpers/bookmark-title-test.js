
import { bookmarkTitle } from 'bookmarker/helpers/bookmark-title';
import { module, test } from 'qunit';

module('Unit | Helper | bookmark title');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = bookmarkTitle(['canary', 'baz']);
  assert.equal(result, 'canary - baz');
  result = bookmarkTitle(['canary', null]);
  assert.equal(result, 'canary');
});

