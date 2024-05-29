import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import Header from "../components/Header/Header";

export default function GoodCollectionPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Perform search logic here, e.g., fetch data from API
    console.log("Searching for:", query);
    // Update search results
    setSearchResults([...searchResults, query]);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
      <ProductList category="cups" />
    </>
  );
}
