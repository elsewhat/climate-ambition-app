import {firestore} from '../firebase'

export function getAmbitionHeaders() {
  return firestore.collection('AmbitionHeaders').get();
}