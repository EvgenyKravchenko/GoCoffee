import { Meteor } from 'meteor/meteor';

import {Messages, Notifications} from '../collections/collections';
                                    
Meteor.startup(() => {
  // code to run on server at startup

    Meteor.publish('messages', function () {
        return Messages.find({}, {sort: {time: -1}, limit: 20});
    });

    Meteor.publish('notifications', function () {
        return Notifications.find();
    });
    
    
});



