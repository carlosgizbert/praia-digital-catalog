import { useState } from 'react'

import Categories from '@ui/components/Categories'
import ProductList from '@ui/components/ProductList'
import ProductView, { IProduct } from '@ui/components/ProductView'

import { catMock } from '@ui/components/Categories/mock'
import { productsMock } from '@ui/components/ProductList/mock'

import * as S from '../../ui/components/pages/carrinho/styles'

export default function Carrinho() {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>()

  const unselectProduct = () => setSelectedProduct(undefined)

  return (
    <S.Wrapper>
      <S.Header>
        <h1>Carrinho do Zé Marinheiro</h1>
        <h2>Gyarda sol 03</h2>
      </S.Header>
      <Categories categories={catMock} idSelected="6372f89e93b0568fee8ac526" />
      <ProductList products={productsMock} onClickProduct={setSelectedProduct} />
      {selectedProduct && (
        <ProductView
          product={selectedProduct}
          onClickClose={() => unselectProduct()}
        />
      )}
    </S.Wrapper>
  )
}
