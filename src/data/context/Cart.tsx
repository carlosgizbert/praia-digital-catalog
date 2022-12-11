import { ICartItem } from '@ui/components/Cart';
import { createContext } from 'react';
import { useState } from 'react'

interface CartContextProps {
  cartItems: ICartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  setCartItems: () => null,
})

export function CartProvider(props: any) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
    }}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartContext