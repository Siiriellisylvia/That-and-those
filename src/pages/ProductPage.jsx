import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { productsRef } from "../../firebase-config";
import Styles from "./ProductPage.module.css";
import Button from "../components/Button/Button";
import Accordion from "../components/Accordion/Accordion";
import { useCart } from "../components/Helpers/UseCart";


export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const { addToCart, isProductInCart } = useCart(); // Use addToCart from the context

  // Fetch the product data based on the productId
useEffect(() => {
  const fetchProduct = async () => {
    const productDoc = doc(productsRef, productId); // Reference to a single product
    try {
      const docSnap = await getDoc(productDoc);
      if (docSnap.exists()) {
        const productData = {
          id: docSnap.id, // Include the document ID in the product object
          ...docSnap.data(),
        };
        setProduct(productData);
        setActiveImage(productData.mainImage || productData.thumbnailImages[0]); // Set initial active image
      } else {
        console.log("No such product!");
      }
    } catch (error) {
      console.error("Failed to fetch product", error);
    }
  };

  fetchProduct();
}, [productId]);


  // Function to handle thumbnail click
  const handleThumbnailClick = (image) => {
    setActiveImage(image); // Set the active image to the clicked thumbnail
  };

// const handleAddToCart = () => {
//   if (product) {
//     addToCart(product);
//     console.log("Adding to cart", product); // Check what product is being added
//   } else {
//     console.log("No product to add"); // Debug: check if the product is null
//   }
//   };

  return (
    <div className="page">
      {product ? (
        <div className={Styles.productPageContainer}>
          <div className={Styles.thumbnailsContainer}>
            {/* Map through the thumbnail images and render an img element for each thumbnail */}
            {product.thumbnailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={
                  activeImage === img
                    ? Styles.activeThumbnail
                    : Styles.thumbnail
                }
                onClick={() => handleThumbnailClick(img)}
              />
            ))}
          </div>
          <div className={Styles.mainImageContainer}>
            <img
              src={activeImage}
              alt="Main Display"
              className={Styles.mainImage}
            />
          </div>
          <div className={Styles.detailsContainer} key={product.id}>
            <h2>{product.name}</h2>
            <p className={Styles.price}>{product.price}</p>
            <p className={Styles.description}>{product.description}</p>

            {/* Conditional rendering based on if the product is already in the cart */}
            {isProductInCart(product.id) ? (
              <Button disabled className="sage">
                Already in cart
              </Button>
            ) : (
              <Button className= "sage" onClick={() => addToCart(product)}>Add to cart</Button>
            )}

            <Accordion title="Pickup and returns">
              Only pickup in Aarhus C, returns within 14 days
            </Accordion>
            <Accordion title="Measurements">
              <div>
                Capacity: {product.measurements.capacity}
                <br />
                Height: {product.measurements.height}
                <br />
                Weight: {product.measurements.weight}
              </div>
            </Accordion>
            <Accordion title="Care instructions">
              Microwave, freezer, oven safe
            </Accordion>
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}