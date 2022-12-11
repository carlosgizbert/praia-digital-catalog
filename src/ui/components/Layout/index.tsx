import Cart from '../Cart'

import * as S from './styles'

interface ILayout {
  children?: any
}

export default function Layout({ children }: ILayout) {

  return (
    <S.Layout>
      <S.Content>
        {children}
      </S.Content>
      <Cart />
    </S.Layout>
  )
}