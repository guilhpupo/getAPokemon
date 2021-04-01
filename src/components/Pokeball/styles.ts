import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    margin: 2rem 0 4rem;
    justify-content: center;
  `}
`
export const Image = styled.img`
  ${() => css`
    width: 30rem;
    animation: shake 500ms ease infinite alternate;

    @keyframes shake {
      from {
        transform: rotate3d(1, 1, 1, 8deg);
      }
    }
  `}
`
