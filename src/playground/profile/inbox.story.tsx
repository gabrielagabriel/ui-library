import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import Section from 'layout/section/baseSection'
import TabsSection from 'layout/section/tabsSection'

import ItemAction from 'itemAction'
import ClockIcon from 'icon/clockIcon'

import account from './common/account'
import About from './common/about'
import AboutForm from './common/aboutForm'
import Profile from './components/profile'

const stories = storiesOf('Playground|Profile/explore', module)

const panel1 = (
  <Grid>
    <Row>
      <Col xs={12} sm={6} md={4} lg={4}>
        <About />
      </Col>
      <Col xs={6} sm={6} md={8} lg={8}>
        <AboutForm />
      </Col>
    </Row>
  </Grid>
)

const panel4 = <Section>Panel 2 content</Section>

const notificationConfig = {
  leftAddon: <ClockIcon />,
  action: 'Add a photo',
  subLabel: 'People like to put a face to a name.',
  href: '#',
}
const panel5 = (
  <Section>
    <ul>
      <ItemAction {...notificationConfig} />
      <ItemAction {...notificationConfig} />
    </ul>
  </Section>
)

const StyledTabSection = styled(TabsSection)`
  .section-content {
    max-width: 968px;
  }
  .container {
    width: 100%;
  }
`

const defaultTabsConfig = {
  activeTabId: 'tab1',
  tabs: [
    {
      id: 'tab1',
      label: 'About you',
      panelContent: panel1,
    },
    {
      id: 'tab3',
      label: 'Account',
      panelContent: account,
    },
    {
      id: 'tab4',
      label: 'Your Rides',
      panelContent: panel4,
    },
    {
      id: 'tab5',
      label: 'Notifications',
      panelContent: panel5,
      badgeContent: text('Badge content 2', '2'),
      badgeAriaLabel: 'Unread Message',
    },
  ],
}

stories.add('default', () => (
  <Fragment>
    <Profile />
    <StyledTabSection tabsProps={defaultTabsConfig} />
  </Fragment>
))
