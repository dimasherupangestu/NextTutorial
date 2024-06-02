import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapShot = await getDocs(collection(firestore, collectionName));

  const data = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataId(collectionName: string, id: string) {
  const snapShot = await getDoc(doc(firestore, collectionName, id));

  const data = snapShot.data();
  return data;
}
