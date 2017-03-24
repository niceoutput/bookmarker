import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';
import Ember from 'ember';

const { Model, attr } = DS;

export default Model.extend({
  username: attr('string'),
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  avatar: attr('string'),
  isAdmin: attr('boolean', {
    defaultValue: false
  }),
  created: attr('date', {
    defaultValue() {return new Date();}
  }),
  bookmarks: hasMany('bookmark'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
