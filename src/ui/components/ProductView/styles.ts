import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  lefT: 0;
  width: 100vw;
  min-height: 100%;
  overflow-y: hidden;
  
  background-color: ${({ theme }) => theme.colors.white};
`

export const Image = styled.div<{ url: string }>`
  height: 200px;
  width: 100%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center center;
`

export const Close = styled.div`
  z-index: 110;
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 56px;
  width: 56px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dark_10};
  border-radius: 50%;

  cursor: pointer;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  padding: 1.5rem;
`

export const Name = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark_10}
`

export const Description = styled.h2`
  color: ${({ theme }) => theme.colors.grey_20};
  font-weight: normal;
`

export const Bottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 1.5rem;
  
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Price = styled.span`
  z-index: 110;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark_10};
  font-size: 1.4rem;;
`

export const PriceLabel = styled.span`
  color: ${({ theme }) => theme.colors.grey_20}
`