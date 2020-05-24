import { createGlobalStyle } from 'styled-components'
import { fontFaces } from './fonts/fonts'

export const GlobalStyle = createGlobalStyle`
${fontFaces}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Geomenist"
  }
`
