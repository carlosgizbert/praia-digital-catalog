import { useState } from 'react'

import Categories from '@ui/components/Categories'
import ProductList from '@ui/components/ItemsList'
import { ICartItem } from '@ui/components/Cart'
import ProductView, { IProduct } from '@ui/components/ProductView'

import { categoriesMock } from '@ui/components/Categories/categoriesMock'
import { productsMock } from '@ui/components/ItemsList/mock'

import * as S from '../../ui/components/pages/carrinho/styles'
import Layout from '@ui/components/Layout'
import useCartData from 'src/data/hook/useCartData'

interface ICategory {
  _id: string
  name: string
  icon: string
}

export default function Carrinho() {
  const [categories, setCategories] = useState<ICategory[]>(categoriesMock)
  const [products, setProducts] = useState<IProduct[]>(productsMock)
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()

  const { setCartItems } = useCartData()

  const unselectProduct = () => setSelectedProduct(undefined)

  const handleAddToCart = (product: IProduct) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id)

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        })
      }

      const newCartItems = [...prevState]
      const item = newCartItems[itemIndex]

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      }


      return newCartItems
    })
    // const selected = products.filter((p) => p._id === productId)[0]
    // const selectedCartItem: ICartItem = {
    //   ...selected,
    //   quantity: 1,
    // }
    // setCartItems([...cartProducts, { selected }])
  }

  return (
    <Layout>
     <S.Wrapper>
      <S.Header>
        <h1>Carrinho do Zé Marinheiro</h1>
        <h2>🏖️ Guarda sol 03</h2>
      </S.Header>
      <Categories categories={categories} idSelected="6372f89e93b0568fee8ac526" />
      <ProductList products={products} onClickProduct={setSelectedProduct} />
      {selectedProduct && (
        <ProductView
          product={selectedProduct}
          onClickAddToCart={handleAddToCart}
          onClickClose={() => unselectProduct()}
        />
      )}
    </S.Wrapper>
    </Layout>
  )
}
