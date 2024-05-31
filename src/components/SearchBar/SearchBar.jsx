import Styles from "./SearchBar.module.css";
import Button from "../Button/Button"; // If you don't need the button, you can remove this import

export default function SearchBar({ searchQuery, setSearchQuery }) {

  return (
    <section className={Styles.searchBarContainer}>
      <div className={Styles.searchBarContent}>
        <div className={Styles.form}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="sage">Search</Button>
        </div>

      </div>
    </section>
  );
}
