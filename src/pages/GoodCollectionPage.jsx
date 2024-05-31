import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import useProductFilter from "../components/HelperHooks/useProductFilter";

export default function GoodCollectionPage() {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("GoodCollection");

  return (
    <>
      <div>
        <Header title="good collection" />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}
