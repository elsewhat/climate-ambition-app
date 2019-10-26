import {firestore_conn} from '../firebase'

export function getAmbitionHeaders() {
  return firestore_conn.collection('AmbitionHeaders').get();
}