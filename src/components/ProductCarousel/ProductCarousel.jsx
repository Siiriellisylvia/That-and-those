import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import { productsRef } from "../../../firebase-config.js";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductCarousel/ProductCarousel.css";
import NoProductBanner from "../Banners/NoProductBanner/NoProductBanner";

export default function ProductCarousel({ category, setHasProducts}) {
  const [products, setProducts] = useState([]);

  // Fetch products based on the selected category
  useEffect(() => {
    console.log("Current category: ", category); // Debugging statement to check the category

    let q;
    if (category === "All") {
      // Fetch all products without any category filter
      q = query(productsRef, orderBy("date", "desc"));
    } else {
      // Fetch products filtered by the selected category
      q = query(
        productsRef,
        where("categories", "array-contains", category),
        orderBy("date", "desc")
      );
    }
    // Subscribe to the query and update the products state
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
      setHasProducts(productsData.length > 0); // Update parent state based on products length
    });

    return () => unsubscribe();
  }, [category, setHasProducts]);

  //Show arrows only if there are more than 4 products
  const showArrows = products.length > 4;

  return (
    // Show the Splide carousel only if there are products
    products.length > 0 ? (
    <Splide
      options={{
        type: "slide",
        perPage: 4,
        perMove: 1,
        gap: "1rem",
        pagination: false,
        arrows: showArrows,
        padding: 0,
        breakpoints: {
      768: {
        perPage: 2,
        gap: '0.5rem',
      }}
      }}
    >
      {/* Map through the products array and render a ProductCard component for each product} */}
      {products.map((product) => (
        <SplideSlide key={product.id}>
          <ProductCard product={product} key={product.id} />
        </SplideSlide>
      ))}
    </Splide>
  ) : (
    // Show the NoProductBanner component if there are no products
    <NoProductBanner />));
}
