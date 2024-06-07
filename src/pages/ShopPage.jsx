import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import useProductFilter from "../components/Helpers/useProductFilter";
import ProductCount from "../components/ProductCount/ProductCount";
import Styles from "./CategoryPages.module.css";

import Header from "../components/Header/Header";
import SortFilter from "../components/SortFilter/SortFIlter";
import CupsHeader from "../assets/cupsHeader.png"; 

export default function ShopPage () {
    const { filteredProducts, searchQuery, setSearchQuery } =
      useProductFilter();


  return (
    <div>
      <Header title="shop" backgroundImage={CupsHeader} />
      <div className={`${Styles.searchContainer} page`}> 
        <ProductCount count={filteredProducts.length} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortFilter />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

