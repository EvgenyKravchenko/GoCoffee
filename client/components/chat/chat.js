import moment from 'moment';

import {Messages} from '../../../collections/collections';

window.messagesChat = Messages;

Template.chat.helpers({
  messages: Messages.find({}, {sort: {time: -1}})
});

Template.chat.events = {
  'submit #chatForm'(e) {
    const target = e.target;
    const text = target.chatMessage.value;

    e.preventDefault();

    target.chatMessage.value = '';

    Messages.insert({
      from: Meteor.user().profile.name,
      time: Date.now(),
      text: text
    });
  }
};


Template.message.helpers({
  formattedTime() {
    return moment(this.time).fromNow();
  },
  oldMessagesStyle() {
    return moment(this.time).isBefore(moment().subtract(10, 'minutes')) ? 'old-message' : '';
  }
});