import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  username: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  avatar: attr('string'),
  isAdmin: attr('boolean', {
    defaultValue: false
  }),
  created: attr('date', {
    defaultValue() {return new Date();}
  })
});
