import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { productsRef } from "../../firebase-config";
import Styles from "./ProductPage.module.css";
import Button from "../components/Button/Button";


export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  // Fetch the product data based on the productId
  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(productsRef, productId); // Reference to a single product
      try {
        const docSnap = await getDoc(productDoc);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct(data);
          setActiveImage(data.mainImage || data.thumbnailImages[0]); // Set initial active image
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
          <div className={Styles.detailsContainer}>
            <h2>{product.name}</h2>
            <p className={Styles.price}>{product.price}</p>
            <p className={Styles.description}>{product.description}</p>
            <Button className="sage">Add to Cart</Button>
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}