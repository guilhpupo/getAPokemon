import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 5rem;
`
type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    width: 30rem;
    height: 30rem;
    animation: growUp 300ms ease-in;

    @keyframes growUp {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
  `}
`
