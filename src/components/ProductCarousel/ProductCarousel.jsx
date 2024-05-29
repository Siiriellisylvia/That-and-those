import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { onSnapshot, query } from "firebase/firestore";
import { useState, useEffect} from "react";
import { productsRef } from "../../../firebase-config.js";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductCarousel/ProductCarousel.css";

export default function ProductCarousel() {

      const [products, setProducts] = useState([]);


    useEffect(() => {
      const q = query(productsRef);
      const unsubscribe = onSnapshot(q, (data) => {
        const productsData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Products fetched:", productsData); // Log the fetched products

        setProducts(productsData);
      });
      return () => unsubscribe(); // tell the component to unsubscribe from listen on changes from firestore
    }, []);

  return (
    <Splide
      options={{
        type: "slide",
        perPage: 4,
        perMove: 1,
        gap: "1rem",
        pagination: false,
      }}
    >
      {products.map((product) => (
        <SplideSlide key={product.id}>
          <ProductCard product={product} key={product.id} />
        </SplideSlide>
      ))}
    </Splide>
  );
}