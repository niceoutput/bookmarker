import Ember from 'ember';

const UsersListComponent = Ember.Component.extend({
    imgClass: "avatar",
    click() {
        Ember.Logger.info("Users-list was clicked");
        return false;
    }
});

UsersListComponent.reopenClass({
    positionalParams: ['avatarUrl', 'email']
});

export default UsersListComponent;
