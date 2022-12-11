import styled from 'styled-components'

export const Wrapper = styled.div`
  /* z-index: 90;
  position: fixed;
  bottom: 0;
  lefT: 0; */
  display: flex;
  flex-direction: column;
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.div<{ url: string }>`
  width: 48px;
  height: 40px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center center;

  border-radius: 0.5rem;
`

export const Details = styled.div`
  display: flex;
  gap: 0.5rem;
  
  padding: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Quantity = styled.small`
  color: ${({ theme }) => theme.colors.grey_20};
`

export const Name = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark_10}
`

export const Bottom = styled.div`
  padding: 0 1.5rem;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

`

export const PriceWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Price = styled.span`
  z-index: 110;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey_30};
  font-size: 1rem;;
`

export const PriceLabel = styled.span`
  color: ${({ theme }) => theme.colors.grey_20}
`

export const MessageEmptyCart = styled.span`
  color: ${({ theme }) => theme.colors.grey_20}; 
`