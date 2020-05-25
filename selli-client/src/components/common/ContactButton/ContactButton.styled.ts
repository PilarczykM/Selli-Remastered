import styled, { css } from 'styled-components'
import { Props } from './types'

const primaryColor = '#002f34'
const whiteColor = '#fff'

export const Button = styled.button<Props>`
  position: relative;
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  word-wrap: break-word;
  cursor: pointer;
  padding: 0 12px;
  overflow: hidden;
  border-radius: 4px;
  background-color: ${(p) => (p.inverted || p.transparent ? whiteColor : primaryColor)};
  border: ${(p) => (p.inverted ? `1px solid ${primaryColor}` : `3px solid ${primaryColor}`)};
  color: ${(p) => (p.inverted || p.transparent ? primaryColor : whiteColor)};
  transition: all 0.3s ease;

  ${({ transparent }) =>
    transparent &&
    css`
      border: ${`3px solid ${whiteColor}`};
      border-radius: 8px;
    `}

  &:hover {
      background-color: ${(p) => (p.transparent ? primaryColor : whiteColor)};
      color: ${(p) => (p.transparent ? whiteColor : primaryColor)};
      border: ${(p) => (p.transparent ? `3px solid ${whiteColor}` : `3px solid ${primaryColor}`)};
`
