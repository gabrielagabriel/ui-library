import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'

import Section from 'layout/section/baseSection'
import TabsSection from 'layout/section/tabsSection'

import Avatar from 'avatar'
import Button, { ButtonStatus } from 'button'
import ButtonGroup from 'buttonGroup'
import Text, { TextDisplayType, TextTagType } from 'text'
import SubHeader from 'subHeader'
import ItemAction from 'itemAction'
import ItemChoice from 'itemChoice'
import Divider from 'divider'
import TextField, { inputTypes } from 'textField'
import TextArea from 'textarea'
import CheckIcon from 'icon/checkIcon'
import ClockIcon from 'icon/clockIcon'
import { color } from '_utils/branding'
import { PhoneField } from 'index'

const stories = storiesOf('Playground|Profile/explore', module)

const verifications = {
  leftAddon: <CheckIcon />,
  subLabel: 'gab.gab@blablacar.com',
  href: '#',
}
const panel1 = (
  <Fragment>
    <Section>
      <SubHeader>About you</SubHeader>
      <ul>
        <ItemChoice labelInfo="Personal Information" href="#" />
        <ItemChoice labelInfo="Photo" href="#" />
        <ItemChoice labelInfo="Write my mini-bio" href="#" />
        <ItemChoice labelInfo="Add my preferences" href="#" />
      </ul>
      <Divider />
      <SubHeader>Verifications</SubHeader>
      <ul>
        <ItemChoice labelInfo="Verify my id" href="#" />
        <ItemAction {...verifications} />
      </ul>
      <Divider />
      <SubHeader>Car</SubHeader>
      <ul>
        <ItemChoice labelInfo="Add a car" href="#" />
      </ul>
      <Divider />
      <ButtonGroup isReverse isInline={false}>
        <Button status={ButtonStatus.TERTIARY}>See your public profile</Button>
        <span />
      </ButtonGroup>
      <Divider />
    </Section>
    <Section>
      <TextField placeholder="First Name" id="firstName" />
      <TextField placeholder="Last Name" id="lastName" />
      <TextField placeholder="Email" id="email" type={inputTypes.EMAIL} />
      <PhoneField textFieldTitle="Phone number" id="phone" defaultRegionValue="FR" />
      <TextArea id="bio" placeholder="What are your interests?" />
      <ButtonGroup isReverse={false} isInline={false}>
        <Button status={ButtonStatus.PRIMARY}>Save</Button>
        <span />
      </ButtonGroup>
    </Section>
  </Fragment>
)

const panel3 = (
  <Section>
    <SubHeader>Ratings</SubHeader>
    <ul>
      <ItemChoice labelInfo="Ratings you've received" href="#" />
      <ItemChoice labelInfo="Ratings you've left" href="#" />
    </ul>
    <Divider />
    <SubHeader>Preferences</SubHeader>
    <ul>
      <ItemChoice labelInfo="Notifications" href="#" />
      <ItemChoice labelInfo="Password" href="#" />
    </ul>
    <Divider />
    <SubHeader>Money</SubHeader>
    <ul>
      <ItemChoice labelInfo="Awaiting transfers" href="#" />
      <ItemChoice labelInfo="Transfers methods" href="#" />
      <ItemChoice labelInfo="Payments" href="#" />
    </ul>
    <Divider />
    <SubHeader>Account</SubHeader>
    <ul>
      <ItemChoice labelInfo="Close my account" href="#" />
      <ItemChoice labelInfo="Logout" href="#" />
    </ul>
    <Divider />
  </Section>
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
      panelContent: panel3,
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

const StyledBaseSection = styled(Section)`
  background: #00aff5;

  .section-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
  }
`

stories.add('Responsiviness', () => (
  <Fragment>
    <StyledBaseSection>
      <Avatar
        image={text('url', '//placehold.it/80x80')}
        alt="Avatar"
        isIdChecked={boolean('isIdChecked', false)}
        isMedium
      />
      <Text
        display={TextDisplayType.SUBHEADERSTRONG}
        tag={TextTagType.PARAGRAPH}
        textColor={color.textWithBackground}
      >
        Gabriela
      </Text>
      <Text
        display={TextDisplayType.BODY}
        tag={TextTagType.PARAGRAPH}
        textColor={color.textWithBackground}
      >
        Newcomer
      </Text>
    </StyledBaseSection>
    <TabsSection tabsProps={defaultTabsConfig} />
  </Fragment>
))
