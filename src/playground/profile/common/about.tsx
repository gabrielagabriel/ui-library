import React from 'react'

import Section from 'layout/section/baseSection'

import Button, { ButtonStatus } from 'button'
import ButtonGroup from 'buttonGroup'
import SubHeader from 'subHeader'
import ItemAction from 'itemAction'
import ItemChoice from 'itemChoice'
import Divider from 'divider'
import CheckIcon from 'icon/checkIcon'

const verifications = {
  leftAddon: <CheckIcon />,
  subLabel: 'gab.gab@blablacar.com',
  href: '#',
}

const about = () => (
  <Section>
    <SubHeader>About you</SubHeader>
    <ul>
      <ItemChoice
        labelInfo="Personal Information"
        href="?path=/story/playground-profile-mobile--about"
      />
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
)

export default about
