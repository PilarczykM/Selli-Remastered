import { storiesOf } from '@storybook/react'
import React from 'react'
import { ContactButton } from './ContactButton'

const styles = {
  width: '350px',
  margin: '20px',
  padding: '20px',
}

const stylesWithBG = {
  width: '350px',
  margin: '20px',
  padding: '20px',
  backgroundColor: '#002f34',
}

const Center = ({ children }: any) => <div style={styles}>{children}</div>

const CenterWithColor = ({ children }: any) => <div style={stylesWithBG}>{children}</div>

storiesOf('Contact buttons:', module)
  .add('Normal', () => (
    <Center>
      <ContactButton>Normal button</ContactButton>
    </Center>
  ))
  .add('Inverted', () => (
    <Center>
      <ContactButton inverted>Inverted button</ContactButton>
    </Center>
  ))
  .add('Transparent', () => (
    <CenterWithColor>
      <ContactButton transparent>Inverted button</ContactButton>
    </CenterWithColor>
  ))
