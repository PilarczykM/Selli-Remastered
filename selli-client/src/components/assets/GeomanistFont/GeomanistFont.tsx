import { createGlobalStyle } from 'styled-components'
import geomenistWoff from './assets/geomanist-regular-webfont.woff'
import geomenistWoff2 from './assets/geomanist-regular-webfont.woff2'

export const GeomanistFont = createGlobalStyle`
  @font-face {
    font-family: 'Geomenist';
    src: url(${geomenistWoff}) format('woff'), url(${geomenistWoff2}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
`
