import { StarDto } from "../../dto/starDto";
import { getFirestore } from ".";

const db = getFirestore();

export async function createDocument(data: StarDto) {
    const docCollection = db.collection('stars');  
    const docRef = await docCollection.add(data);
    console.log('Document added with ID:', docRef.id);
    return docRef.id;
  }
  
  export async function readCollection() {
    const docCollection = db.collection('stars');
    const querySnapshot = await docCollection.get();
    const stars: StarDto[] = [];
    querySnapshot.forEach(doc => {
      const {world, tier, location, foundBy} = doc.data();
      stars.push({
        id: doc.id,
        world, tier, location, foundBy,
        readTime: doc.readTime.toDate(),
        updateTime: doc.updateTime.toDate(),
        createTime: doc.createTime.toDate()
      } as StarDto);
    });
    return stars;
  }
  
  export async function readDocument(documentId: string) {
    const docRef = db.collection('stars').doc(documentId);
    const doc = await docRef.get();
  
    if (doc.exists) {
      console.log('Document data:', doc.data());
      const {world, tier, location, foundBy} = doc.data();
      return {
        id: doc.id,
        world, tier, location, foundBy,
        readTime: doc.readTime.toDate(),
        updateTime: doc.updateTime.toDate(),
        createTime: doc.createTime.toDate()
      } as StarDto;
    } else {
      console.error('No such document!');
    }
  }
  
  export async function updateDocument(documentId: string, data) {
    const docRef = db.collection('stars').doc(documentId);
    const res = await docRef.update(data);
    console.log('Document updated!', res);
    return { writeTime: res.writeTime.toDate() };
  }
  
  export async function deleteDocument(documentId: string) {
    const docRef = db.collection('stars').doc(documentId);
    const res = await docRef.delete();
    console.log('Document deleted!', res);
    return { writeTime: res.writeTime.toDate() };
  }