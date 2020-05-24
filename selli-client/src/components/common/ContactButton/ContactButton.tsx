import React, { FC } from 'react'
import * as S from './ContactButton.styled'
import { Props } from './types'

export const ContactButton: FC<Props> = ({ inverted, transparent, children }) => {
  return (
    <S.Button inverted={inverted} transparent={transparent}>
      {children}
    </S.Button>
  )
}
