import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save(bookmark) { Ember.Logger.info('save cancelled');},
        cancel() { Ember.Logger.info('cancel called');}
    }
});
