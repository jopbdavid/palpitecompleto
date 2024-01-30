import { db } from "@/firebaseConfig";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";

export const getAllProducts = async () => {
  const products = [];
  try {
    const docRef = collection(db, "products");
    const docSnap = await getDocs(docRef);

    if (docSnap) {
      docSnap.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });
      console.log(products);
      return products;
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const addProduct = async (product) => {
  try {
    await db.collection("products").add(product);
    console.log("Product added!");
  } catch (error) {
    console.log(error);
  }
};
