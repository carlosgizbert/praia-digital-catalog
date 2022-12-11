import styled from 'styled-components'

export const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  .product-image {
    border-radius: 8px;
    background-size: contain;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Name = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark_10}
`

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.grey_20};
`

export const Price = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey_30}
`