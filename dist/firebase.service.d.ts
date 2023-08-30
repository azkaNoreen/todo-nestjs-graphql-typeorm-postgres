import * as admin from 'firebase-admin';
export declare class FirebaseService {
    private readonly messaging;
    serviceAccountConfig: admin.ServiceAccount;
    constructor();
    sendNotification(token: string): Promise<void>;
}
