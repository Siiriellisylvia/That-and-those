
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productsRef} from "../../../firebase-config";
import { query, onSnapshot } from "firebase/firestore";
import Styles from "../ProductList/ProductList.module.css"

export default function ProductList ({ category, product }) {
  console.log("Product:", product);
  console.log ('Category', category) // Log the product object

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const q = query(productsRef);
    const unsubscribe = onSnapshot(q, (data) => {
      const productsData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Products fetched:", productsData); // Log the fetched products

      setProductsList(productsData);
    });
    return () => unsubscribe(); // tell the component to unsubscribe from listen on changes from firestore
  }, []);

  return (
    <div className="page">
      <div className={Styles.productList}>
        {productsList.map((product) => (
          <ProductCard key={product.id} {...product} product={product} />
        ))}
      </div>
    </div>
  );
}
