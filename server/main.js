import { Meteor } from 'meteor/meteor';
import {Messages, Notifications} from '../collections/collections';

//AccountsTemplates.removeField('email');
//AccountsTemplates.addField({
//  _id: "username",
//  type: "text",
//  displayName: "username",
//  required: true,
//  minLength: 3
//});

Meteor.startup(() => {
  // code to run on server at startup

  ServiceConfiguration.configurations.update(
    { "service": "facebook" },
    {
      $set: {
        "appId": "1569038610073011",
        "secret": "5f105c5cb1b2ff03c23348d498f56991"
      }
    },
    { upsert: true }
  );

  Meteor.publish('messages', function () {
      return Messages.find({}, {sort: {time: -1}, limit: 20});
  });

  Meteor.publish('notifications', function () {
      return Notifications.find();
  });
});



