import { db } from './firebase-config';
import { collection, doc, writeBatch } from 'firebase/firestore';

function createLog(batch) {
  const logCollectionRef = doc(collection(db, 'logs'));
  batch.set(logCollectionRef, { teste: 'testando' });
  return batch;
}
function createCurrentWeather(batch, data) {
  const currentWeatherRef = doc(db, 'currentWeather', `${data.cityId}`);
  batch.set(currentWeatherRef, { teste: 'testando' });
  return batch;
}

export async function handleFirebase(data) {
  let batch = writeBatch(db);
  batch = createLog(batch);
  batch = createCurrentWeather(batch, data);
  await batch.commit();
}
