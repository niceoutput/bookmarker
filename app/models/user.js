import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr('string'),
  isAdmin: DS.attr('boolean', {
    defaultValue: false
  }),
  created: DS.attr('date', {
    defaultValue() {return new Date();}
  }),
  bookmarks: hasMany('bookmark')
});
