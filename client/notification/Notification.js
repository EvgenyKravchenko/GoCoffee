import {Notifications, Messages} from '../../collections/collections';

export class Notification {
  constructor() {
    this._Notification = window.Notification;
    this._notificationPermissionGranted = null;
    this.askPermissions();
  }

  showNotification(text) {
    new this._Notification(text);
  }

  sendNotification(text) {
    Notifications.insert({
      time: Date.now(),
      from: 'My name',
      text: text
    });

    Messages.insert({
      time: Date.now(),
      from: 'My name',
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