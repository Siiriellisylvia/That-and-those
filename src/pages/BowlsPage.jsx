import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import useProductFilter from "../components/Helpers/useProductFilter";

export default function BowlsPage() {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("Bowls");

  return (
    <>
    <div>
      <Header title="Bowls" />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductList products={filteredProducts} />
    </div>
    </>
  );
}
