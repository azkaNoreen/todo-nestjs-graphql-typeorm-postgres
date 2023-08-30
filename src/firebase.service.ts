// firebase.service.ts
import * as admin from 'firebase-admin';
import * as serviceAccount from './creds.json'; // Adjust the filename
import { Injectable } from '@nestjs/common';
@Injectable()
export class FirebaseService {
  private readonly messaging: admin.messaging.Messaging;
  serviceAccountConfig: admin.ServiceAccount = {
    projectId: serviceAccount.project_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    // Add any other properties needed
  };

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccountConfig),
      // other configurations
    });
    this.messaging = admin.messaging();
  }

  async sendNotification(
    token: string,
    // notification: admin.messaging.Notification,
  ) {
    const notification: admin.messaging.NotificationMessagePayload = {
      title: 'Notification Title',
      body: 'Notification Body',
      // Other properties...
    };
    try {
      await this.messaging.sendToDevice(token, { notification });
      console.log('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }
}
