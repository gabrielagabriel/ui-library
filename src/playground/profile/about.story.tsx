import React from 'react'
import { storiesOf } from '@storybook/react'

import Section from 'layout/section/baseSection'

import AboutForm from './common/aboutForm'

const stories = storiesOf('Playground|Profile/mobile/', module)

stories.add('about', () => (
  <Section>
    <AboutForm />
  </Section>
))
