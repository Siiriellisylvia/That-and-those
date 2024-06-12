import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import useProductFilter from "../components/Helpers/useProductFilter";
import PlatesHeader from "../assets/platesHeader1.png";
import ProductCount from "../components/ProductCount/ProductCount";
import Styles from "./CategoryPages.module.css";
import SortFilter from "../components/SortFilter/SortFIlter";
import NoProductBanner from "../components/Banners/NoProductBanner/NoProductBanner";

export default function PlatesPage() {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("Plates");

  return (
    <>
      <div>
        <Header title="plates" backgroundImage={PlatesHeader} />
        <div className={`${Styles.searchContainer} page`}>
          <ProductCount count={filteredProducts.length} />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SortFilter />
        </div>
        {filteredProducts.length === 0 ? (
          <NoProductBanner />
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>
    </>
  );
}
