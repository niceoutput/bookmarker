import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { Model, attr } = DS;

export default Model.extend({
    link: attr('string'),
    title: attr('string'),
    about: attr('string'),
    public: attr('boolean'),
    created: attr('date', {
        defaultValue() { return new Date(); }
    }),
    user: belongsTo('user')
});
