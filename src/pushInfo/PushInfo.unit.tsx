import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import { color } from '_utils/branding'
import ProximityIcon from 'icon/proximityIcon'
import { animationDuration, animationDelay } from './PushInfo'
import PushInfo from './index'

it('Should have the correct attributes and text.', () => {
  const pushInfo = renderer
    .create(
      <PushInfo
        headline="If it's green it's a win!"
        content="Green icons show meeting points closest to you!"
      />,
    )
    .toJSON()
  expect(pushInfo).toMatchSnapshot()
})

it('Should also have the correct icon.', () => {
  const pushInfo = renderer
    .create(
      <PushInfo
        icon={<ProximityIcon iconColor={color.success} title="" />}
        headline="If it's green it's a win!"
        content="Green icons show meeting points closest to you!"
      />,
    )
    .toJSON()
  expect(pushInfo).toMatchSnapshot()
})

it('Should call the onAnimationEnd prop after some time', () => {
  jest.useFakeTimers()
  const onAnimationEnd = jest.fn()
  mount(
    <PushInfo
      headline="If it's green it's a win!"
      content="Green icons show meeting points closest to you!"
      onAnimationEnd={onAnimationEnd}
    />,
  )

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(onAnimationEnd, animationDuration + animationDelay)
})
