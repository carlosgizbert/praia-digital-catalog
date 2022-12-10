import Image from 'next/image'

import { formatCurrency } from '@ui/utils'

import { IProduct } from '../ProductView'

import * as S from './styles'

interface IProductList {
  products: IProduct[]
  onClickProduct: (product: IProduct) => void
}

export default function ProductList({ products, onClickProduct }: IProductList) {
  return (
    <S.Products>
        {products.map((product) => {
          const { _id, name, description, price, imagePath } = product
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
        })}
      </S.Products>
  )
}
