import { useState, useEffect } from 'react'
import { formatCurrency } from '@ui/utils'
import { Button } from '@ui/components/Button'

import { IProduct } from '../ProductView'

import * as S from './styles'

interface ICart {
  items?: IProduct[]
}

export default function Cart({ items }: ICart) {
  const [total, setTotal] = useState<number>(0)

  const hasItems = !!items

  useEffect(() => {
    if (items) {
      const totalValue = items.reduce((acc, product) => acc + product.price, 0)
      setTotal(totalValue)
    }
  }, [items])
  

  return (
    <S.Wrapper>
      {hasItems && items.map((product) => {
        const { imagePath, name, price } = product
        return (
          <>
          <S.Image url={`http://54.94.46.47:3000/uploads/${imagePath}`} />
          <S.Details>
            <S.Quantity>2x</S.Quantity>
            <S.Info>
              <S.Name>{name}</S.Name>
              <S.Price>{formatCurrency(price)}</S.Price>
            </S.Info>
          </S.Details>
          </>
        )
      })}
      <S.Bottom>
        <S.PriceWrapper>
          {hasItems && (
            <>
            <S.PriceLabel>Total</S.PriceLabel>
            <S.Price>{formatCurrency(total)}</S.Price>
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