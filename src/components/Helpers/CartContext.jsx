import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isCartOpen: false,
  toggleCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    console.log("Adding to cart:", product.id); // Ensure IDs are present and correct

    setCartItems((prevItems) => [...prevItems, product]);
    console.log("Product added, opening cart...");
    setIsCartOpen(true);
  };

const removeFromCart = (productId) => {
  console.log("Removing product with ID:", productId);
  console.log(
    "Current cart items before removal:",
    cartItems.map((item) => item.id)
  );

  setCartItems((currentItems) => {
    const filteredItems = currentItems.filter((item) => item.id !== productId);
    console.log(
      "Cart items after removal:",
      filteredItems.map((item) => item.id)
    );
    return filteredItems;
  });
};

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
      console.log("Toggling cart open state:", !isCartOpen);

  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isCartOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
