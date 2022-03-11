import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAfXqtHW3KuLN4GbRkVF8k_gfWUBhUoj6k',
  authDomain: 'ambar-tech.firebaseapp.com',
  projectId: 'ambar-tech',
  storageBucket: 'ambar-tech.appspot.com',
  messagingSenderId: '35980920923',
  appId: '1:35980920923:web:6194cb337f63351c0d577e',
  measurementId: 'G-KD8399RBRB'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
