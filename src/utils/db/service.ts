import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

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

export async function signIn(userData: { email: string }) {
  const quer = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapShot = await getDocs(quer);
  const data = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: {
    fullname: string;
    email: string;
    password: string;
    role?: string;
  },
  callbacks: (response: { status: boolean; message: string }) => void
) {
  const quer = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );
  const snapShot = await getDocs(quer);
  const data = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callbacks({
      status: false,
      message: "Email already exists", // Perbaiki pesan kesalahan
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "user";
    try {
      await addDoc(collection(firestore, "users"), userData);
      callbacks({
        status: true,
        message: "Register Success",
      });
    } catch (err) {
      callbacks({
        status: false,
        message: "Error during registration", // Perbaiki pesan kesalahan
      });
    }
  }
}
