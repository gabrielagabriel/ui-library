import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

import IllustratedSection from 'layout/section/illustratedSection'

import Modal, { ModalProps } from 'modal'
import Button, { ButtonStatus } from 'button'
import TextDisplay1 from 'typography/display1'

export interface SuccessModalProps extends ModalProps {
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
}

class SuccessModal extends Component<SuccessModalProps> {
  static defaultProps: Partial<SuccessModalProps> = {
    isOpen: false,
    closeOnEsc: false,
    forwardedRef: null,
    imageText: '',
  }

  render() {
    const {
      isOpen,
      children,
      size,
      onClose,
      confirmLabel,
      forwardedRef,
      imageSrc,
      imageText,
      className,
    } = this.props

    const baseClassName = 'kirk-successModal'
    const successContentId = `${baseClassName}-content-${uuidv4()}`

    return (
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={size}
        closeOnEsc={false}
        displayCloseButton={false}
        displayDimmer={false}
        forwardedRef={forwardedRef}
        className={className}
        modalContentClassName={baseClassName}
        ariaLabelledBy={successContentId}
      >
        <IllustratedSection illustrationUrl={imageSrc} illustrationAlt={imageText}>
          <TextDisplay1 isInverted>{children}</TextDisplay1>
          <Button
            status={ButtonStatus.SECONDARY}
            className={`${baseClassName}-confirmButton`}
            data-test="success-button"
            onClick={onClose}
          >
            {confirmLabel}
          </Button>
        </IllustratedSection>
      </Modal>
    )
  }
}

export default SuccessModal
