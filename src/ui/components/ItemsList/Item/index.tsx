import Image from 'next/image'
import { formatCurrency } from '@ui/utils'
import { IProduct } from '@ui/components/ProductView'

import * as S from './styles'

interface IItem {
  onClickProduct: (product: IProduct) => void
  product: IProduct
}


export default function Item({ product, onClickProduct }: IItem) {
  const { _id, imagePath, name, description, price } = product
  return (
    <S.Product key={_id} onClick={() => onClickProduct(product)}>
    <Image src={`http://54.94.46.47:3000/uploads/${imagePath}`} alt={name} width={90} height={72} className="product-image" />
    <S.Info>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
      <S.Price>{formatCurrency(price)}</S.Price>
    </S.Info>
  </S.Product>
  )
}