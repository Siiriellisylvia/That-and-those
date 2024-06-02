import { db, doc, updateDoc } from "./firebase-config.js";

const productsData = [
  {
    id: "ZPuqONMJ66DT3TvVmeNV", // This should be the Firestore document ID of the product
    mainImage:
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/ZPuqONMJ66DT3TvVmeNV%2FmainImage-placeholder.png?alt=media&token=5c08433d-fafd-40b1-b0b6-377524abb874",
    thumbnailImages: [
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/ZPuqONMJ66DT3TvVmeNV%2Fthumbnail-placeholder1.png?alt=media&token=b87dbf06-a53d-42e5-8f83-e9f3efee58c5",
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/ZPuqONMJ66DT3TvVmeNV%2Fthumbnail-placeholder2.png?alt=media&token=2910e55d-c98a-4d87-b76d-813caa53f7fd",
    ],
    measurements: {
      height: "10cm",
      width: "9cm",
      capacity: "300ml",
    },
    description:
      "For the latte lovers, this cup is perfect for your morning coffee. It's made of stoneware clay and is dishwasher safe.",
    date: new Date(),
    categories: ["Bowls"],
    name: "morning bowl",
    price: ["300", "dkk"],
    inStock: true,
    colors: ["coral"],
  },
  {
    id: "YtUl3ERS1a97WwlbtSLE", // This should be the Firestore document ID of the product
    mainImage:
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/ZPuqONMJ66DT3TvVmeNV%2FmainImage-placeholder.png?alt=media&token=5c08433d-fafd-40b1-b0b6-377524abb874",
    thumbnailImages: [
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/ZPuqONMJ66DT3TvVmeNV%2Fthumbnail-placeholder1.png?alt=media&token=b87dbf06-a53d-42e5-8f83-e9f3efee58c5",
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/ZPuqONMJ66DT3TvVmeNV%2Fthumbnail-placeholder2.png?alt=media&token=2910e55d-c98a-4d87-b76d-813caa53f7fd",
    ],
    measurements: {
      height: "10cm",
      width: "9cm",
      capacity: "300ml",
    },
    description:
      "For the latte lovers, this cup is perfect for your morning coffee. It's made of stoneware clay and is dishwasher safe.",
    date: new Date(),
    categories: ["Bowls"],
    name: "ramen bowl",
    price: ["300", "dkk"],
    inStock: true,
    colors: ["coral"],
  },
  // Add more products as needed
];

const updateProducts = async () => {
  for (const product of productsData) {
    const productRef = doc(db, "products", product.id); // Get a reference to the document

    try {
      // Update the document
      await updateDoc(productRef, product);
      console.log("Product updated with ID: ", product.id);
    } catch (e) {
      console.error("Error updating product: ", e);
    }
  }
};

updateProducts();
