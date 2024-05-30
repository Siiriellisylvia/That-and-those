import ProductList from "../components/ProductList/ProductList";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";

export default function ShopPage({ product }) {
  return (
    <>
      <Header title="shop" />
      <SearchBar />
      <ProductList product={product} />
    </>
  );
}
