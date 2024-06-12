import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import useProductFilter from "../components/Helpers/useProductFilter";
import BowlsHeader from "../assets/bowlsHeaderSmall.png";
import ProductCount from "../components/ProductCount/ProductCount";
import Styles from "./CategoryPages.module.css";
import SortFilter from "../components/SortFilter/SortFIlter";

export default function BowlsPage() {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("Bowls");

  return (
    <>
      <div>
        <Header title="bowls" backgroundImage={BowlsHeader} />
        <div className={`${Styles.searchContainer} page`}>
          <ProductCount count={filteredProducts.length} />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SortFilter />
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}
