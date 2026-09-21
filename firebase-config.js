// Firebase Configuration and Initialization Module
// Automatically configured from project nss-quiz-fc2db

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAntuO4dqL2QOzZal-MKGBYpoWy_yRotoQ",
  authDomain: "nss-quiz-fc2db.firebaseapp.com",
  databaseURL: "https://nss-quiz-fc2db-default-rtdb.firebaseio.com",
  projectId: "nss-quiz-fc2db",
  storageBucket: "nss-quiz-fc2db.firebasestorage.app",
  messagingSenderId: "68343865147",
  appId: "1:68343865147:web:9ec68b5a0aeffc30bba11e",
  measurementId: "G-6Z4SR7TR14"
};

function getFirebaseConfig() {
  const saved = localStorage.getItem('nss_quiz_firebase_config');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved Firebase config", e);
    }
  }
  return DEFAULT_FIREBASE_CONFIG;
}

function saveFirebaseConfig(config) {
  localStorage.setItem('nss_quiz_firebase_config', JSON.stringify(config));
}

let firebaseApp = null;
let firebaseDb = null;

function initFirebaseApp() {
  const config = getFirebaseConfig();
  try {
    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp(config);
    } else {
      firebaseApp = firebase.app();
    }
    firebaseDb = firebase.database();
    return { app: firebaseApp, db: firebaseDb, isConfigured: true };
  } catch (err) {
    console.warn("Firebase initialization warning:", err);
    return { app: null, db: null, isConfigured: false, error: err };
  }
}
