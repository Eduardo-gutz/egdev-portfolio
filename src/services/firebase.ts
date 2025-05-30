import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } from "@/config/global";

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

export let analytics: Analytics | undefined
export let db: Firestore | undefined

if (typeof window !== 'undefined') {
    const app = initializeApp(firebaseConfig)
    analytics = getAnalytics(app)
    db = getFirestore(app)
  }
