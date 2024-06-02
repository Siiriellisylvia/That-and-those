import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isCartOpen: false,
  toggleCart: () => {},
  isProductInCart: () => false,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    if (!isProductInCart(product.id)) {
      setCartItems((prevItems) => [...prevItems, product]);
      setIsCartOpen(true);
    }
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
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
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isCartOpen,
        toggleCart,
        isProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
