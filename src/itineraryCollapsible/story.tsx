import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import ItineraryCollapsible from './index'

const stories = storiesOf('ItineraryCollapsible', module)
stories.addDecorator(withKnobs)

const places: Place[] = [
  {
    time: '09:00',
    stepAriaLabel: 'Pickup location',
    isoDate: '2017-12-11T09:00',
    subLabel: 'Porte de Vincennes',
    mainLabel: 'Paris',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '12:00',
    isoDate: '2017-12-11T12:00',
    stepAriaLabel: 'Pick up/drop off location',
    subLabel: 'Gare de Tours',
    mainLabel: 'Tours',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '15:00',
    isoDate: '2017-12-11T15:00',
    stepAriaLabel: 'Pick up/drop off location',
    mainLabel: 'Nogent-le-Rotrou',
    actionAriaLabel: '09:00 Paris Porte de Vincennes (New page with a map)',
    href: '#',
  },
  {
    time: '19:00',
    isoDate: '2017-12-11T19:00',
    stepAriaLabel: 'Pick up/drop off location',
    subLabel: 'Gare Bordeaux Saint-Jean',
    mainLabel: 'Bordeaux',
  },
]

stories.add('Basic', () => (
  <ul>
    <ItineraryCollapsible
      places={places}
      className={text('className', 'custom-class')}
      label={text('label', `${places.length} stops`)}
      ariaLabel={text('ariaLabel', 'Click to show or hide all stops')}
    />
  </ul>
))
