import useCartData from 'src/data/hook/useCartData'

import { Button } from '@ui/components/Button'

import { formatCurrency } from '@ui/utils'
import { IProduct } from '../ProductView'

import * as S from './styles'

export interface ICartItem {
  product: IProduct
  quantity: number
}

export default function Cart() {
  const { cartItems, totalPrice } = useCartData()

  const hasItems = !!cartItems
  

  return (
    <S.Wrapper>
      {hasItems && (
        <S.Items>
          {cartItems.map((item) => {
            const { _id, imagePath, name, price } = item.product
            return (
              <S.Item key={_id}>
              <S.Image url={`http://54.94.46.47:3000/uploads/${imagePath}`} />
              <S.Details>
                <S.Quantity>{item.quantity}x</S.Quantity>
                <S.Info>
                  <S.Name>{name}</S.Name>
                  <S.Price>{formatCurrency(price)}</S.Price>
                </S.Info>
              </S.Details>
              </S.Item>
            )
          })}
        </S.Items>
      )}
      <S.Bottom>
        <S.PriceWrapper>
          {hasItems && (
            <>
            <S.PriceLabel>Total</S.PriceLabel>
            <S.Price>{formatCurrency(totalPrice)}</S.Price>
            </>
          )}
          {!hasItems && (
            <>
            <S.MessageEmptyCart>Seu carrinho está vazio</S.MessageEmptyCart>
            </>
          )}
        </S.PriceWrapper>
        <Button label='Confirmar pedido' onClick={() => null} disabled={!hasItems} />
      </S.Bottom>
    </S.Wrapper>
  )
}