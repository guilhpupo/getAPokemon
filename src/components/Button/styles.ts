import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  hasIcon: boolean
}

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon }) => css`
    height: 5rem;
    width: 20rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    font-family: ${theme.font.family};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.darkBlue};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    text-decoration: none;
    opacity: 80%;

    &:hover {
      opacity: 100%;
      font-size: 1.7rem;
      transition: opacity 0.5s;
      transition: font-size 0.2s;
    }

    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
