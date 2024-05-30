import ProductList from '../components/ProductList/ProductList';
import SearchBar from '../components/SearchBar/SearchBar';
import Header from '../components/Header/Header';

export default function CupsPage ({product}) {

    return (
      <>
        <Header title="cups" />
        <SearchBar />
        <ProductList category="Cups" product={product} />
      </>
    );
}