import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import useProductFilter from "../components/Helpers/useProductFilter";
import GoodHeader from "../assets/cupsHeader.png";

export default function GoodCollectionPage() {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("GoodCollection");

  return (
    <>
      <div>
        <Header title="the good collection" backgroundImage={GoodHeader} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}
