import moment from 'moment';

import {Messages} from '../../collections/collections';

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
      from: 'MyName',
      time: Date.now(),
      text: text
    });
  }
};


Template.message.helpers({
  formattedTime: function () {
    return moment(this.time).fromNow();
  }
});