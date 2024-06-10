import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import useProductFilter from "../components/Helpers/useProductFilter";
import GoodHeader from "../assets/cupsHeader.png";
import ProductCount from "../components/ProductCount/ProductCount";
import Styles from "./CategoryPages.module.css";
import SortFilter from "../components/SortFilter/SortFIlter";

export default function GoodCollectionPage() {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("Good");

  return (
    <>
      <div>
        <Header title="the good collection" backgroundImage={GoodHeader} />
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
