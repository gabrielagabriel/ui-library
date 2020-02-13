import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'

import Section from 'layout/section/baseSection'

import Avatar from 'avatar'
import Text, { TextDisplayType, TextTagType } from 'text'
import { color } from '_utils/branding'

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

const Profile = () => (
  <StyledBaseSection>
    <Avatar
      image="https://pbs.twimg.com/profile_images/749446875162505218/6r6-9wDn.jpg"
      alt="Avatar"
      isIdChecked={boolean('isIdChecked', false)}
      isMedium
    />
    <Text
      display={TextDisplayType.SUBHEADERSTRONG}
      tag={TextTagType.PARAGRAPH}
      textColor={color.textWithBackground}
    >
      Pepe le Pew
    </Text>
    <Text
      display={TextDisplayType.BODY}
      tag={TextTagType.PARAGRAPH}
      textColor={color.textWithBackground}
    >
      Driver
    </Text>
  </StyledBaseSection>
)

export default Profile
