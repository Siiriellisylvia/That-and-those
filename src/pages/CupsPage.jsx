import ProductList from '../components/ProductList/ProductList';
import SearchBar from '../components/SearchBar/SearchBar';
import Header from '../components/Header/Header';
import useProductFilter from '../components/Helpers/useProductFilter';
import Styles from "./CategoryPages.module.css";
import ProductCount from '../components/ProductCount/ProductCount';
import SortFilter from '../components/SortFilter/SortFIlter';
import Cart from '../components/Cart/Cart';


export default function CupsPage () {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("Cups");

  return (
    <div>
      <Header title="Cups" />{" "}
      <div className={`${Styles.searchContainer} page`}>
        <ProductCount count={filteredProducts.length} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortFilter />
      </div>{" "}
      <ProductList products={filteredProducts} />
      <Cart/>
    </div>
  );
}