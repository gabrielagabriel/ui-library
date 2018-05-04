import React from 'react'

import Checkbox from 'checkbox'

it('should have the proper text & attributes', () => {
  const checkbox = shallow((
    <Checkbox
      name="checkbox1"
      value="value"
      subLabel="subLabel"
      checked
    >
      Label checkbox
    </Checkbox>
  ))
  expect(checkbox.text()).toContain('Label checkbox')
  expect(checkbox.find('input').prop('type')).toBe('checkbox')
  expect(checkbox.find('input').prop('name')).toBe('checkbox1')
  expect(checkbox.find('input').prop('value')).toBe('value')
  expect(checkbox.find('input').prop('checked')).not.toBeNull()
  expect(checkbox.find('.kirk-subLabel')).toHaveLength(1)
})

it('should not be checked by default', () => {
  const checkbox = shallow(<Checkbox name="checkbox1" value="value">Label</Checkbox>)
  expect(checkbox.find('input').prop('checked')).toBe(false)
})

it('should have the accessibility attributes', () => {
  const checkbox = shallow(<Checkbox name="checkbox1" value="value">Label</Checkbox>)
  expect(checkbox.find('label input')).toHaveLength(1)
})

it('should be able to receive props', () => {
  const checkbox = shallow(<Checkbox name="checkbox1" value="value">Label</Checkbox>)
  const spyReceiveProps = jest.spyOn(Checkbox.prototype, 'componentWillReceiveProps')
  const spySetState = jest.spyOn(Checkbox.prototype, 'setState')
  expect(spyReceiveProps).not.toHaveBeenCalled()
  checkbox.setProps({ checked: false })
  // Value not changed
  expect(spyReceiveProps).toHaveBeenCalledTimes(1)
  expect(spySetState).not.toHaveBeenCalled()
  // Value changing
  checkbox.setProps({ checked: true })
  expect(spySetState).toHaveBeenCalledTimes(1)
})

it('should trigger a change event on a normal checkbox', () => {
  const onCheckboxClick = jest.fn()
  const checkbox = shallow((
    <Checkbox onChange={onCheckboxClick} name="checkbox1" value="value">
      Label
    </Checkbox>
  ))
  expect(checkbox.state('isChecked')).toBe(false)
  checkbox.instance().onChange()
  expect(onCheckboxClick).toHaveBeenCalledWith({ name: 'checkbox1', value: true })
  expect(checkbox.state('isChecked')).toBe(true)
})

it('should trigger a change event on an async checkbox', () => {
  const onCheckboxClick = jest.fn()
  function callback() {
    expect(onCheckboxClick).toHaveBeenCalledTimes(1)
  }
  const checkbox = shallow((
    <Checkbox
      onChange={() => {
        setTimeout(() => { onCheckboxClick(callback) }, 1000)
      }}
      name="checkbox1"
      value="value"
      asynchronous
    >
      Label
    </Checkbox>
  ))
  checkbox.find('input').simulate('change')
})
