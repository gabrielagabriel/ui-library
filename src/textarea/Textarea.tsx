import React, { PureComponent, RefObject } from 'react'
import cc from 'classcat'

import prefix from '_utils'
import Button, { ButtonStatus } from 'button'
import isEmpty from 'lodash.isempty'

export interface CommonFormFields {
  name: string
  id?: string
  placeholder?: string
  maxLength?: number
  autoCorrect?: 'on' | 'off'
  autoComplete?: 'on' | 'off'
  disabled?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  required?: boolean
  title?: string
  onFocus?: (
    event: React.FocusEvent<HTMLTextAreaElement>,
  ) => void
  onBlur?: (
    event: React.FocusEvent<HTMLTextAreaElement>,
  ) => void
}

type errorField = string | JSX.Element

export interface TextAreaProps extends CommonFormFields {
  defaultValue?: string
  labelledBy?: string
  onChange?: (obj: OnChangeParameters) => void
  className?: Classcat.Class
  error?: errorField
  label?: string
  focus?: boolean
  pattern?: string
  fieldRef?: (textarea: HTMLTextAreaElement) => void
  focusBorder?: boolean
  fitContent?: boolean // Allow the textarea to grow/shrink with its content.
  // To display the buttom, you need to specify onButtonClick, buttonIcon and buttonTitle.
  onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void
  buttonIcon?: JSX.Element
  buttonTitle?: string
}

interface TextAreaAttributes extends CommonFormFields {
  className?: string
  value: string
  ['aria-invalid']?: 'true' | 'false'
  ['aria-labelledby']?: string
  ref?: (textarea: HTMLTextAreaElement) => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export interface TextAreaState {
  readonly value: string
  readonly hasFocus: boolean
}

const DisplayError = (error: errorField) => {
  const className = 'kirk-error-message'

  return React.isValidElement(error) ? (
    React.cloneElement(error, { className } as Object)
  ) : (
    <span role="alert" className={className}>
      {error}
    </span>
  )
}

export default class Textarea extends PureComponent<TextAreaProps, TextAreaState> {
  private textarea: HTMLInputElement | HTMLTextAreaElement
  static defaultProps: Partial<TextAreaProps> = {
    fieldRef() {},
    onFocus() {},
    onBlur() {},
    focusBorder: true,
  }

  state = {
    value: this.props.defaultValue,
    hasFocus: false,
  }

  buttonRef: HTMLButtonElement = null
  textareaRef: RefObject<HTMLTextAreaElement> = React.createRef()

  componentDidMount() {
    if (this.textareaRef && this.textareaRef.current && this.props.focus) {
      this.textareaRef.current.focus()
    }
  }

  // TODO(BBC-498): Remove deprecated method.
  componentWillReceiveProps({ defaultValue, focus }: TextAreaProps) {
    if (this.props.defaultValue !== defaultValue) {
      this.setState({
        value: defaultValue,
      })
      // Update height in next tick to give a chance to the contained text to
      // give a proper layout to the surrounding parents.
      setTimeout(() => {
        this.maybeAdaptHeightToContent()
      }, 0)
    }
    if (focus && this.props.focus !== focus &&
        this.textareaRef && this.textareaRef.current) {
      this.textareaRef.current.focus()
    }
  }

  onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    this.setState({
      hasFocus: true,
    })
    this.props.onFocus(event)
  }

  onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (!event.relatedTarget || event.relatedTarget !== this.buttonRef) {
      this.setState({
        hasFocus: false,
      })
      this.props.onBlur(event)
    }
  }

  onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState(
        {
          value: event.target.value,
        },
        this.onChange,
    )
  }

  maybeAdaptHeightToContent = () => {
    if (!this.props.fitContent) {
      return
    }

    // Fit height to content.
    if (this.textareaRef && this.textareaRef.current) {
      this.textareaRef.current.style.height = '0'
      const verticalPadding = 16
      this.textareaRef.current.style.height =
          `${this.textareaRef.current.scrollHeight - 2 * verticalPadding}px`
    }
  }

  onChange = () => {
    this.props.onChange({
      name: this.props.name,
      value: this.state.value,
    })

    this.maybeAdaptHeightToContent()
  }

  ref = (textarea: HTMLTextAreaElement) => {
    this.textarea = textarea
    this.props.fieldRef(textarea)
  }

  render() {
    const {
      className,
      placeholder,
      name,
      id,
      labelledBy,
      label,
      error,
      disabled,
      readOnly,
      onFocus,
      onBlur,
      autoFocus,
      required,
      maxLength,
      autoCorrect,
      autoComplete,
      title,
      buttonTitle,
      focusBorder,
      buttonIcon,
      onButtonClick,
      fitContent,
    } = this.props
    const value = this.state.value || ''

    const attributes: TextAreaAttributes = {
      placeholder,
      className: '',
      name,
      id,
      'aria-labelledby': labelledBy,
      value,
      maxLength,
      autoComplete,
      autoCorrect,
      title,
      // modifiers
      disabled,
      readOnly,
      required,
      autoFocus,
      // actions
      onFocus,
      onBlur,
      onChange: this.onTextAreaChange,
      ref: this.ref,
    }

    if (error) {
      attributes['aria-invalid'] = 'true'
    }

    const textareaFieldClassNames = ['kirk-textarea-element']
    const shouldDisplayButton = buttonIcon && onButtonClick && !isEmpty(buttonTitle)
    if (shouldDisplayButton) {
      textareaFieldClassNames.push('kirk-textarea-hasButton')
    }
    if (fitContent) {
      textareaFieldClassNames.push('kirk-textarea-fitContent')
    }
    attributes.className = cc(textareaFieldClassNames)

    return (
      <div className={cc(['kirk-textarea', prefix({ error: !!error, disabled }), className])}>
        {label && <label htmlFor={id}>{label}</label>}
        <div
          className={cc([
            'kirk-textarea-wrapper',
            {
              'kirk-textarea-wrapper--hasFocus': focusBorder && this.state.hasFocus,
            },
          ])}
        >
          <textarea
              {...attributes} ref={this.textareaRef} onFocus={this.onFocus} onBlur={this.onBlur} />
          {shouldDisplayButton && (
            <Button
              className="kirk-textarea-button"
              status={ButtonStatus.UNSTYLED}
              isBubble
              onClick={onButtonClick}
              tabIndex="0"
              title={buttonTitle}
              buttonRef={(elem: HTMLButtonElement) => {
                this.buttonRef = elem
              }}
            >
              {buttonIcon}
            </Button>
          )}
        </div>
        {Boolean(error) && DisplayError(error)}
      </div>
    )
  }
}