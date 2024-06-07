import { db, doc, updateDoc } from "./firebase-config.js";

const productsData = [
  {
    id: "ql03awY9DKKki7ToPB1y", // This should be the Firestore document ID of the product
    mainImage:
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/good_collection%2Fql03awY9DKKki7ToPB1y%2FIMG_7372.png?alt=media&token=673fd5ef-5377-479b-8631-efc4c9489209",
    thumbnailImages: [
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/good_collection%2Fql03awY9DKKki7ToPB1y%2FIMG_7374.png?alt=media&token=2dcc2db7-382b-4ab5-81dd-e66fac483586",
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/good_collection%2Fql03awY9DKKki7ToPB1y%2FIMG_7376.png?alt=media&token=38a1df31-61d0-4fb7-91b6-07247550b035",
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/good_collection%2Fql03awY9DKKki7ToPB1y%2FIMG_7378.png?alt=media&token=0f9102c5-0fa1-4c6d-b75c-749683a8d757",
    ],
    measurements: {
      height: "10cm",
      width: "9cm",
      capacity: "200ml",
    },
    description:
      "This cup is a glaze layering experiment, with different pastel coloured stripes all around. There is a darker stripe on the inside that some might say is a little ugly, but I think it gives the cup character! ",
    date: new Date(),
    categories: ["Good"],
    name: "striped cup",
    price: { amount: "200", currency: "dkk" },
    inStock: true,
    colors: ["brown", "coral", "yellow", "green", "white"],
  },
  {
    id: "zQDmU7ZDxaMDBuVVOJAE", // This should be the Firestore document ID of the product
    mainImage:
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/good_collection%2FzQDmU7ZDxaMDBuVVOJAE%2FIMG_7394.png?alt=media&token=f3820d06-3a07-47cc-bd52-917d92b40ada",

    thumbnailImages: [
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/good_collection%2FzQDmU7ZDxaMDBuVVOJAE%2FIMG_7391.png?alt=media&token=a3bfb843-797e-470f-97c2-b0aecc52715c",
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/good_collection%2FzQDmU7ZDxaMDBuVVOJAE%2FIMG_7397.png?alt=media&token=b06bcc56-abca-4ae7-89e6-39809cc019d0",
      "https://firebasestorage.googleapis.com/v0/b/that-and-those-6b20e.appspot.com/o/good_collection%2FzQDmU7ZDxaMDBuVVOJAE%2FIMG_7400.png?alt=media&token=75cd2ad8-6a4e-4181-8fad-280cc12a7935",
    ],
    measurements: {
      height: "8cm",
      width: "10cm",
    },
    description:
    "This latte cup is a little bit wonky, but still completely functional. It has a nice, smooth purple and blue mix of glazes and is oven and microwave safe.",
    date: new Date(),
    categories: ["Good"],
    name: "latte cup",
    price: { amount: "200", currency: "dkk" },
    inStock: true,
    colors: ["purple", "blue", "white"],
  },
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
