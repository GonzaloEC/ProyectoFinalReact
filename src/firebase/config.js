// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp  } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSbC36SctXrIPZ1CuMcjBTqA2Dk4HKuMQ",
  authDomain: "sh-shop-4b153.firebaseapp.com",
  projectId: "sh-shop-4b153",
  storageBucket: "sh-shop-4b153.appspot.com",
  messagingSenderId: "344372773165",
  appId: "1:344372773165:web:19131b461921fbb5ee53a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStoreDb = getFirestore(app);



export async function getAllItems() {
  const miColec = collection(fireStoreDb,'items');
  const itemsSnapshot = await getDocs(miColec);

  return itemsSnapshot.docs.map(doc => {
      return {
      ...doc.data(),
      id: doc.id
      }
})};

export async function getItemsByCategory(categoryid){
  const miColec = collection(fireStoreDb,'items');
  const queryItem = query(miColec, where("category", '==', categoryid));
  const itemSnapshot = await getDocs(queryItem);

  return itemSnapshot.docs.map(doc => {
      return {
      ...doc.data(),
      id: doc.id
      }
  
})};

export async function getItem(id){
  const miColec = collection(fireStoreDb,'items');
  const itemRef = doc(miColec, id);
  const itemSnapshot = await getDoc(itemRef);

  
      return {
      ...itemSnapshot.data(),
      id: itemSnapshot.id
      }
  
};

export async function createBuyOrder(orderData){
  const buyTimeStamp = Timestamp.now();
  const orderWithDate = {
      ...orderData,
      date: buyTimeStamp
  };
  const miColec = collection(fireStoreDb,'buyOrders');
  const orderDoc = await addDoc(miColec, orderWithDate);
  console.log("Orden lista con el id ",orderDoc.id);
  return orderDoc.id;   
}