import {css} from 'styled-components';

import geomenistWoff from './geomanist-regular-webfont.woff';
import geomenistWoff2 from './geomanist-regular-webfont.woff2'

export const fontFaces = css`
  @font-face {
    font-family: 'Geomenist';
    src: url(${geomenistWoff}) format('woff'),
    url(${geomenistWoff2})format('woff2');
    font-weight: 500;
    font-style: normal;
  }
`;