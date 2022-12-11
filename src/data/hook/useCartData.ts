import { useContext } from "react";
import CartContext from "../context/Cart";

const useCartData = () => useContext(CartContext)

export default useCartData