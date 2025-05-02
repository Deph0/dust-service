import * as admin from 'firebase-admin';
import { createDocument, deleteDocument, readCollection, readDocument, updateDocument } from './stars-db';

let firestoreInstance: admin.firestore.Firestore = null;

export function InitializeFirestore(serviceAccountKey) {
  if (firestoreInstance) {
    return firestoreInstance;
  }
  const app = admin.initializeApp({
    projectId: 'f2pdust-service',
    credential: admin.credential.cert(serviceAccountKey)
  });
  firestoreInstance = admin.firestore(app);
  console.log("Database initialized");
  return firestoreInstance;
}

export function getFirestore(): admin.firestore.Firestore {
  // if (!firestoreInstance) {
  //   throw new Error('Database not initialized. Call InitializeFirestore first.');
  // }
  return firestoreInstance;
}

export function getCollection(name: string) {
  return firestoreInstance.collection(name);
}

const starsCRUD = {
  createDocument, readDocument, updateDocument, deleteDocument,
  readCollection
};
export {starsCRUD};