import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage";
import Playground from "./components/Playground/Playground";
import CupsPage from "./pages/CupsPage";
import BowlsPage from "./pages/BowlsPage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import GoodCollectionPage from "./pages/GoodCollectionPage";
import PlatesPage from "./pages/PlatesPage";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Helpers/CartContext";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/shop/cups" element={<CupsPage />} />
          <Route
            path="/shop/thegoodcollection"
            element={<GoodCollectionPage />}
          />
          <Route path="/shop/bowls" element={<BowlsPage />} />
          <Route path="/shop/plates" element={<PlatesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
        <Footer />
      </main>
      <Cart />
    </CartProvider>
  );
}

export default App;
