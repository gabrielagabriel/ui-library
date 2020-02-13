import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import Section from 'layout/section/baseSection'
import TabsSection from 'layout/section/tabsSection'

import Profile from 'profile'

import account from './common/account'
import About from './common/about'

const stories = storiesOf('Playground|Profile/mobile/', module)

const user = {
  name: 'Pepe le Pew',
  title: 'Pepe le Pew',
  ariaLabel: 'Driver: Pepe le Pew, Charism +10',
  info: 'Charism +10',
  picture: 'https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg',
  isIdChecked: true,
  isMedium: true,
  isLink: true,
  href: '#',
  score: 100,
  ratings: 5,
  ratingsLabel: 'étoiles',
}

const defaultTabsConfig = {
  activeTabId: 'tab1',
  tabs: [
    {
      id: 'tab1',
      label: 'About you',
      panelContent: <About />,
    },
    {
      id: 'tab2',
      label: 'Account',
      panelContent: account,
    },
  ],
}

stories.add('kirk', () => (
  <Fragment>
    <Section>
      <Profile {...user} />
      <TabsSection tabsProps={defaultTabsConfig} />
    </Section>
  </Fragment>
))
