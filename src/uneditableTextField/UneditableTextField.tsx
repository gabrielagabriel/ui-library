import React, { Fragment } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import { KIRK_LAYOUT_SOLID_ITEM_CLASS } from '_utils/layout'

export interface UneditableTextFieldProps {
  readonly children: JSX.Element | string
  readonly className?: Classcat.Class
  readonly addOn?: JSX.Element
  readonly href?: JSX.Element | string
  readonly ellipsis?: boolean
}

export const UneditableTextField = ({
  children,
  className = '',
  addOn = null,
  ellipsis = false,
  href,
}: UneditableTextFieldProps) => {
  let componentType
  let props: any = {}
  if (href && typeof href !== 'string') {
    componentType = href.type
    props = href.props
  } else if (typeof href === 'string' && !isEmpty(href)) {
    componentType = 'a'
    props = { href }
  } else {
    componentType = 'div'
  }

  return React.createElement(
    componentType,
    {
      className: cc([
        KIRK_LAYOUT_SOLID_ITEM_CLASS,
        'uneditableTextField',
        className
      ]),
      ...props,
    },
    <Fragment>
      {addOn}
      <div
        className={cc([
          'uneditableTextField-label',
          { 'uneditableTextField-label--ellipsis': ellipsis },
        ])}
      >
        {children}
      </div>
    </Fragment>,
  )
}

export default UneditableTextField
