import { db, collection, addDoc } from "./firebase-config.js";

const productsData = [
  {
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
    name: "small bowl",
    price: ["200", "dkk"],
    inStock: true,
    colors: ["brown", "white"],
  },
  {
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
    name: "medium bowl",
    price: ["220", "dkk"],
    inStock: true,
    colors: ["blue", "grey", "coral"],
  },
  {
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
    categories: ["Good"],
    name: "medium bowl",
    price: ["200", "dkk"],
    inStock: true,
    colors: ["green", "brown"],
  },
  {
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
    categories: ["Good"],
    name: "medium bowl",
    price: ["200", "dkk"],
    inStock: true,
    colors: ["green", "brown"],
  },
  {
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
    categories: ["Good"],
    name: "medium bowl",
    price: ["200", "dkk"],
    inStock: true,
    colors: ["green", "brown"],
  },
  {
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
    categories: ["Good"],
    name: "medium bowl",
    price: ["200", "dkk"],
    inStock: true,
    colors: ["green", "brown"],
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
