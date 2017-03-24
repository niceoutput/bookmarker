import Ember from 'ember';

const UsersListComponent = Ember.Component.extend({
    imgClass: "avatar"
});

UsersListComponent.reopenClass({
    positionalParams: ['avatarUrl', 'email']
});

export default UsersListComponent;
