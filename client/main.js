import {Messages} from '../collections/collections';
import {Notification} from './services/notification/Notification';

let notificationService = new Notification();

Template.body.onCreated(function () {
    Meteor.subscribe('messages');
    Meteor.subscribe('notifications');
});

serverMessages.listen('serverMessage:notification', function (subject, message, options) {
    if(Meteor.user().profile.name !== message.from) {
        notificationService.showNotification(message);
    }
});

Tracker.autorun(function(){
    if(Meteor.userId()){
        Messages.insert({
            from: 'System',
            time: Date.now(),
            text: `Hello, ${Meteor.user().profile.name}`
        });
    }
});