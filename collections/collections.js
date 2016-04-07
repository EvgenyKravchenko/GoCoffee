import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');
export const Notifications = new Mongo.Collection('notifications');