import { db, collection, addDoc } from "../That and those/firebase-config.js";
const productsData = [
  {
    image: "https://example.com/cup.jpg",
    measurements: {
      height: "10cm",
      width: "9cm",
      capacity: "300ml",
    },

    description:
      "For the latte lovers, this cup is perfect for your morning coffee. It's made of stoneware clay and is dishwasher safe.",
    date: new Date(),
    categories: ["Cups"],
    name: "kæmpe latte cup",
    price: "300dkk",
    inStock: true,
    colors: ["coral"],
  },

];

const addProducts = async () => {
  for (const product of productsData) {
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Product added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding product: ", e);
    }
  }
};

addProducts();
