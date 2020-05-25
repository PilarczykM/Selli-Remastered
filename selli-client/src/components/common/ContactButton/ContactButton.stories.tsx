import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import { ContactButton } from './ContactButton'

export default {
  title: 'common',
}

export const contactButton = () => {
  return (
    <ContactButton
      inverted={boolean('inverted', false)}
      transparent={boolean('transparent', false)}
    >
      Label
    </ContactButton>
  )
}

contactButton.story = {
  name: 'ContactButton',
}
