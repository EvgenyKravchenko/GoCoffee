import {Notification} from '../notification/Notification';

Template.notificator.onCreated(function() {
  this.Notification = new Notification;
});

Template.notificator.events = {
  'submit #notificatorForm'(e, instance) {
    const target = e.target;
    const text = target.notification.value;

    e.preventDefault();

    target.notification.value = '';

    console.log('submitted request: ', text);


    instance.Notification.showNotification(text);
    instance.Notification.sendNotification(text);
  }
};

