import Image from 'next/image'

import { formatCurrency } from '@ui/utils'

import * as S from './styles'

interface IIngredient {
  name: string
  icon: string
  _id: string
}

interface IProduct {
  _id: string
  name: string
  description: string
  imagePath: string
  price: number
  category: string
  ingredients: IIngredient[]
}

interface IProductList {
  products: IProduct[]
}

export default function ProductList({ products }: IProductList) {
  return (
    <S.Products>
        {products.map(({ _id, name, description, price, imagePath }) => {
          return (
            <S.Product key={_id}>
              <Image src={`http://54.94.46.47:3000/uploads/${imagePath}`} alt={name} width={90} height={72} className="product-image" />
              <S.Info>
                <S.Name>{name}</S.Name>
                <S.Description>{description}</S.Description>
                <S.Price>{formatCurrency(price)}</S.Price>
              </S.Info>
            </S.Product>
          )
        })}
      </S.Products>
  )
}
