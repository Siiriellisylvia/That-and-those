// useProductFilter.js
import { useState, useEffect } from "react";
import { query, where, onSnapshot } from "firebase/firestore";
import { productsRef } from "../../../firebase-config";

const useProductFilter = (initialCategory = null) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let q = initialCategory
      ? query(
          productsRef,
          where("categories", "array-contains", initialCategory)
        )
      : query(productsRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);
    });

    return () => unsubscribe();
  }, [initialCategory]);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    setFilteredProducts(
      products.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(lowerCaseQuery);
        const descriptionMatch =
          product.description?.toLowerCase().includes(lowerCaseQuery) || false;
        const colorMatch =
          product.colors?.some((color) =>
            color.toLowerCase().includes(lowerCaseQuery)
          ) || false;
        return nameMatch || descriptionMatch || colorMatch;
      })
    );
  }, [products, searchQuery]);

  return { filteredProducts, searchQuery, setSearchQuery };
};

export default useProductFilter;