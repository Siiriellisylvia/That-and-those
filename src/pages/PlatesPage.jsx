import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import useProductFilter from "../components/Helpers/useProductFilter";
import PlatesHeader from "../assets/platesHeader.png";

export default function PlatesPage() {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("Plates");

  return (
    <>
      <div>
        <Header title="plates" backgroundImage={PlatesHeader}/>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductList products={filteredProducts} />
      </div>
    </>
  );
}
