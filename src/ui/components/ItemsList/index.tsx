import { IProduct } from '@ui/components/ProductView'
import Item from './Item'

import * as S from './styles'

interface IProductList {
  items: IProduct[]
  onClickProduct: (product: IProduct) => void
}

export default function ItemsList({ items, onClickProduct }: IProductList) {
  return (
    <S.Items>
        {items.map((product) => {
          return <Item key={product._id} product={product} onClickProduct={() => onClickProduct(product)} />
        })}
      </S.Items>
  )
}
