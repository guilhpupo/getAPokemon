import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    -webkit-text-stroke-width: 0.2rem;
    -webkit-text-stroke-color: ${theme.colors.blue};
    color: ${theme.colors.yellow};
    font-family: ${theme.font.pokemon};
    font-size: 3.8rem;
    letter-spacing: 0.3rem;
    text-align: center;
    margin-top: 5rem;

    ${media.greaterThan('medium')`
    font-size: 5rem;
    margin-top: 0;
    `}
  `}
`
