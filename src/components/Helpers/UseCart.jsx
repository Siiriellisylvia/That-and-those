import { useContext } from "react";
import { CartContext } from "../Helpers/CartContext";

export const useCart = () => {
  return useContext(CartContext);
};
