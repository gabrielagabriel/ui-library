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
    width: 100%;
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

// Centering vertically IllustratedSection
const StyledIllustratedSection = styled(IllustratedSection)`
  display: flex;
  flex: 1;

  .kirk-illustratedSection-illustration {
    padding-top: calc(2 * ${space.xxl});
    justify-content: center;
    align-items: center;

    @media (${responsiveBreakpoints.isMediaLarge}) {
      padding-top: 0;
    }
  }

  .kirk-illustratedSection-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`

// Apply layout and spacements to Text
const StyledText = styled(TextDisplay1)`
  padding: ${space.xl};
  flex: 1;
`

// Override Button
const StyledButton = styled(Button)`
  margin: ${space.xl};
`

const Action = styled.div`
  padding: ${space.xl};
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

    const successContentId = `kirk-successModal-content-${uuidv4()}`

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
        ariaLabelledBy={successContentId}
      >
        <StyledIllustratedSection illustrationUrl={imageSrc} illustrationAlt={imageText}>
          <StyledText isInverted>{children}</StyledText>
          <Action>
            <StyledButton
              status={ButtonStatus.SECONDARY}
              data-test="success-button"
              onClick={onClose}
            >
              {confirmLabel}
            </StyledButton>
          </Action>
        </StyledIllustratedSection>
      </StyledSuccessModal>
    )
  }
}

export default SuccessModal
