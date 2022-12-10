import styled from 'styled-components'

export const Button = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  color: ${({ theme }) => theme.colors.white};

  font-weight: bold;

  background-color: ${(props) => props.disabled ? props.theme.colors.grey_10 : props.theme.colors.brand_primary_00};
  border-radius: 48px;
  padding: 0.875rem 1.5rem;
  cursor: pointer;
`
