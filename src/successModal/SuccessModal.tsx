import React from 'react'
import uuidv4 from 'uuid/v4'

import styled from 'styled-components'

import { color, space, responsiveBreakpoints } from '_utils/branding'

import IllustratedSection from 'layout/section/illustratedSection'

import Modal, { ModalProps } from 'modal'
import Button, { ButtonStatus } from 'button'
import TextDisplay1 from 'typography/display1'

// Override Modal: Success
const StyledSuccessModal = styled(Modal)`
  padding: 0;
  text-align: center;
  background-color: ${color.successBackground};

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

// Override IllustratedSection: Centering vertically
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

const SuccessModal = (props: SuccessModalProps): JSX.Element => {
  const {
    isOpen = false,
    onClose = () => {},
    forwardedRef = null,
    confirmLabel,
    imageSrc,
    imageText = '',
    children,
    className,
  } = props

  const successContentId = `kirk-successModal-content-${uuidv4()}`

  return (
    <StyledSuccessModal
      onClose={onClose}
      isOpen={isOpen}
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

export default SuccessModal
