import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');
export const Notifications = new Mongo.Collection('notifications');





if(Meteor.isServer) {
    Notifications.after.insert((userId, doc) => {
        serverMessages.notify('serverMessage:notification', userId, doc, {});
    });
}