import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import styled from 'styled-components'

import { color, font, space, responsiveBreakpoints } from '_utils/branding'

import IllustratedSection from 'layout/section/illustratedSection'

import Modal, { ModalProps } from 'modal'
import Button, { ButtonStatus } from 'button'
import TextDisplay1 from 'typography/display1'

const StyledSuccessModal = styled(Modal)`
  padding: 0;
  text-align: center;
  background-color: ${color.successBackground};

  /* overrides */
  .kirk-modal-dialog {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    height: 100%;
    border-radius: 0;
    background-color: ${color.successBackground};
  }

  .kirk-modal-body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    @media (${responsiveBreakpoints.isMediaLarge}) {
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`

const StyledIllustratedSection = styled(IllustratedSection)`
  display: flex;
  height: 100%;
  flex: 1;

  .kirk-illustratedSection-illustration {
  }

  .kirk-illustratedSection-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`

const StyledText = styled(TextDisplay1)`
  flex: 1;
`

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
      <StyledSuccessModal
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
        <StyledIllustratedSection illustrationUrl={imageSrc} illustrationAlt={imageText}>
          <StyledText isInverted>{children}</StyledText>
          <Button
            status={ButtonStatus.SECONDARY}
            className={`${baseClassName}-submit`}
            data-test="success-button"
            onClick={onClose}
          >
            {confirmLabel}
          </Button>
        </StyledIllustratedSection>
      </StyledSuccessModal>
    )
  }
}

export default SuccessModal
