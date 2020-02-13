import React from 'react'

import Section from 'layout/section/baseSection'

import Button, { ButtonStatus } from 'button'
import ButtonGroup from 'buttonGroup'
import TextField, { inputTypes } from 'textField'
import TextArea from 'textarea'
import { PhoneField } from 'index'

const AboutForm = () => (
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
)

export default AboutForm
