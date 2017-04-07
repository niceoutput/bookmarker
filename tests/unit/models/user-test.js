import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: ['model:bookmark']
});

test('it exists', function(assert) {
  let model = this.subject({firstName: 'Foo', lastName: 'Bar'});
  // let store = this.store();
  assert.equal(model.get('fullName'), 'Foo Bar', 'valid fullname');
});
