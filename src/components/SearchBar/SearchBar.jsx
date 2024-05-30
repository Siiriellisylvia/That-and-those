import { useState } from "react";
import Styles from "./SearchBar.module.css";
import Button from "../Button/Button"; // If you don't need the button, you can remove this import

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  // Function to handle the input change
  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Call the onSearch function passed as a prop
  };

  return (
    <section className={`${Styles.searchBarContainer} page`}>
      <div className={Styles.searchBarContent}>
        <h4 className={Styles.searchBarColumn}>4 products</h4>
        <div className={Styles.form}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
          />
          <Button className="sage">Search</Button>
        </div>
        <div className={Styles.searchBarLinks}>
          <h4>sort</h4>
          <h4>filter</h4>
        </div>
      </div>
    </section>
  );
}
