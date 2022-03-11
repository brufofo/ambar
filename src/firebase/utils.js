import { db } from './firebase-config';
import {
  collection,
  doc,
  writeBatch,
  serverTimestamp,
  query,
  where,
  onSnapshot
} from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity } from '../redux/citySlice';

function createLog(batch, data) {
  const logCollectionRef = doc(collection(db, 'logs'));

  batch.set(logCollectionRef, { ...data, timestamp: serverTimestamp() });
  return batch;
}
function createCurrentWeather(batch, data) {
  const currentWeatherRef = doc(db, 'currentWeather', `${data.cityId}`);
  batch.set(currentWeatherRef, { ...data });
  return batch;
}

export async function handleFirebase(data) {
  let batch = writeBatch(db);
  batch = createLog(batch, data);
  batch = createCurrentWeather(batch, data);
  await batch.commit();
}

export const createObserver = (func) => {
  const q = query(collection(db, 'currentWeather'));

  // eslint-disable-next-line no-unused-vars
  const observer = onSnapshot(q, (snap) => {
    snap.docChanges().forEach((change) => {
      if (change.type === 'added') {
        console.log('New city: ', change.doc.data());
      }
      if (change.type === 'modified') {
        console.log('Modified city: ', change.doc.data());
        func(change.doc.data());

        // setState(change.doc.data());
      }
      if (change.type === 'removed') {
        console.log('Removed city: ', change.doc.data());
      }
    });
  });
  return observer;
};
