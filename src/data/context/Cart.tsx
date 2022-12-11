import { createContext, useState, useMemo } from 'react'
import { ICartItem } from '@ui/components/Cart';

interface CartContextProps {
  cartItems: ICartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>
  totalPrice: number
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  setCartItems: () => null,
  totalPrice: 0,
})

export function CartProvider(props: any) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useMemo(() => {
    if (cartItems) {
      const totalValue = cartItems.reduce((acc, item) => acc + item.product.price, 0)
      setTotalPrice(totalValue)
    }
  }, [cartItems])

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      totalPrice,
    }}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartContext