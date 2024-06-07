import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import useProductFilter from "../components/Helpers/useProductFilter";
import BowlsHeader from "../assets/bowlsHeader.png";

export default function BowlsPage() {
  const { filteredProducts, searchQuery, setSearchQuery } =
    useProductFilter("Bowls");

  return (
    <>
    <div>
      <Header title="bowls" backgroundImage={BowlsHeader}/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductList products={filteredProducts} />
    </div>
    </>
  );
}
