import {Notifications, Messages} from '../../../collections/collections';

export class Notification {
  constructor() {
    this._Notification = window.Notification;
    this._notificationPermissionGranted = null;
    this.askPermissions();
  }

  showNotification(message) {
    const notification = new this._Notification(message.from, {
      body: message.text
    });

    notification.onclick = function () {
      event.preventDefault();
      window.open('http://localhost:3000', '_blank');
    }

  }

  sendNotification(text) {
    let userName = Meteor.user().profile.name;

    Notifications.insert({
      time: Date.now(),
      from: userName,
      text: text
    });

    Messages.insert({
      time: Date.now(),
      from: userName,
      text: text
    });
  }

  askPermissions() {
    this._Notification.requestPermission(this._onPermissionGranted);
  }

  _onPermissionGranted() {
    this._notificationPermissionGranted = true;
    console.log('Notification permissions granted');
  }
}