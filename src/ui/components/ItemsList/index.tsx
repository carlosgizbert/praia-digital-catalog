import { IProduct } from '@ui/components/ProductView'
import Item from './Item'

import * as S from './styles'

interface IProductList {
  products: IProduct[]
  onClickProduct: (product: IProduct) => void
}

export default function ProductList({ products, onClickProduct }: IProductList) {
  return (
    <S.Products>
        {products.map((product) => {
          return <Item key={product._id} product={product} onClickProduct={() => onClickProduct(product)} />
        })}
      </S.Products>
  )
}
