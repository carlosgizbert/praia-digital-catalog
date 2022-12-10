import { formatCurrency } from '@ui/utils'
import { Button } from '@ui/components/Button'

import * as S from './styles'

export interface IProduct {
  _id: string
  name: string
  description: string
  imagePath: string
  price: number
  category: string
}

interface IProductView {
  product: IProduct
}

export default function ProductView({ product }: IProductView) {
  const { imagePath, name, description, price } = product
  return (
    <S.Wrapper>
     <S.Image url={`http://54.94.46.47:3000/uploads/${imagePath}`} />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Info>
      <S.Bottom>
        <S.PriceWrapper>
          <S.PriceLabel>Valor</S.PriceLabel>
          <S.Price>{formatCurrency(price)}</S.Price>
        </S.PriceWrapper>
        <Button label='Adicionar ao pedido' onClick={() => null} />
      </S.Bottom>
    </S.Wrapper>
  )
}