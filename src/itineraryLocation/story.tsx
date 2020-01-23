import React from 'react'

import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import ItineraryLocation from './index'

const stories = storiesOf('ItineraryLocation', module)
stories.addDecorator(withKnobs)

const place: Place = {
  time: '09:00',
  stepAriaLabel: 'Pickup location',
  isoDate: '2017-12-11T09:00',
  subLabel: 'Porte de Vincennes',
  mainLabel: 'Paris',
  actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
  href: '#',
}

stories.add('Basic', () => (
  <ul style={{ listStyle: 'none' }}>
    <ItineraryLocation
      className={text('className', 'custom-class')}
      place={place}
      isSmall={boolean('isSmall', false)}
      isArrival={boolean('isArrival', false)}
      hasTime={boolean('hasTime', false)}
      hasBottomAddon={boolean('hasBottomAddon', false)}
      hasSubLabel={boolean('hasSubLabel', false)}
    />
  </ul>
))
