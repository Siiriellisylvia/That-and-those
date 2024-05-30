import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productsRef } from "../../../firebase-config";
import { query, where, onSnapshot } from "firebase/firestore";
import Styles from "../ProductList/ProductList.module.css";

export default function ProductList({category=null}) {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    // Conditional query to filter by category if a category prop is provided
    const q = category
      ? query(productsRef, where("categories", "array-contains", category))
      : query(productsRef); // If no category, fetch all products

    const unsubscribe = onSnapshot(q, (data) => {
      const productsData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Products fetched:", productsData); // Log the fetched products

      setProductsList(productsData);
    });
    return () => unsubscribe(); // Tell the component to unsubscribe from listening to changes from Firestore
  }, [category]); // React only to changes in category

  return (
    <div className="page">
      {/* <h4>
        {productsList.length === 1
          ? "1 product"
          : `${productsList.length} products`}
      </h4> */}
      <div className={Styles.productList}>
        {productsList.map((product) => (
          <ProductCard key={product.id} {...product} product={product} />
        ))}
      </div>
    </div>
  );
}
