import React from 'react'

import Section from 'layout/section/baseSection'

import SubHeader from 'subHeader'
import ItemChoice from 'itemChoice'
import Divider from 'divider'

const account = (
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

export default account
