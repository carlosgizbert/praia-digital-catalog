import * as S from './styles'

interface IProduct {
  _id: string
  name: string
  description: string
  imagePath: string
  price: number
  category: string
  ingredients: Array<any>
}

interface IProductList {
  products: IProduct[]
}

export default function ProductList({ products }: IProductList) {
  return (
    <S.Products>
        {products.map(({ _id, name }) => {
          return (
            <S.Product key={_id}>
              {name}
            </S.Product>
          )
        })}
      </S.Products>
  )
}
