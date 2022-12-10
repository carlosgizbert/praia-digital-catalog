import Categories from '@ui/components/categories'
import ProductList from '@ui/components/productList'

import { catMock } from '@ui/components/categories/mock'
import { productsMock } from '@ui/components/productList/mock'

import * as S from './styles'

export default function Carrinho() {
  return (
    <S.Wrapper>
      <S.Header>
        <h1>Pedido</h1>
        <h2>Mesa 3</h2>
      </S.Header>
      <Categories categories={catMock} idSelected="6372f89e93b0568fee8ac526" />
      <ProductList products={productsMock} />
    </S.Wrapper>
  )
}
