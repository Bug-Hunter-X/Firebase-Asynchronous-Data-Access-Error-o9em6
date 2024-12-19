```javascript
import { doc, getDoc, onSnapshot } from "firebase/firestore";

async function getData(docRef) {
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or throw error
  }
}

// Example usage:
const docRef = doc(db, "collection", "documentId");
getData(docRef).then(data => {
  if(data) {
    console.log(data.name);
  }
});

//Alternatively with onSnapshot:
const unsub = onSnapshot(docRef, (doc) => {
  if(doc.exists()) {
    console.log(doc.data().name);
  }
});
```