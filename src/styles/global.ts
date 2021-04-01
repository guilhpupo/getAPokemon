import { createGlobalStyle, css } from 'styled-components'
import {} from 'styled-components/cssprop'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Marvel&display=swap');
@font-face {
  font-family: Pokemon;

  src: url('fonts/PokemonSolidNormal-xyWR.ttf');
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.darkBlue};
    }
  `}
`

export default GlobalStyles
