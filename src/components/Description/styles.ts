import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: 3.2rem;
    color: ${theme.colors.yellow};
    letter-spacing: 0.1rem;
  `}
`
export const MainText = styled.h2`
  font-size: 3.2rem;
`
export const SecondaryText = styled.h3`
  font-size: 2.2rem;
`
