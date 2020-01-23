import styled from 'styled-components'
import { color, radius, space, componentSizes } from '_utils/branding'

import ItineraryLocation from './ItineraryLocation'

const gutterTopOffset = '1px'
const lineHeightAdjustment = '4px'

const StyledItineraryLocation = styled(ItineraryLocation)`
  & {
    --time-width: calc(${componentSizes.timeWidth} + ${componentSizes.bulletSize});
  }

  & {
    position: relative;
    list-style-type: none;
  }

  /* wrapper */
  & .kirk-itineraryLocation-wrapper {
    display: flex;
    padding: ${space.m} 0;
    width: 100%;
  }

  & a.kirk-itineraryLocation-wrapper {
    background: none;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  & button.kirk-itineraryLocation-wrapper {
    border: 0;
    cursor: pointer;
    text-align: left;
    width: 100%;
    font-family: inherit;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color: ${color.tapHighlight};
    -webkit-touch-callout: none;
  }

  & a.kirk-itineraryLocation-wrapper:hover,
  & button.kirk-itineraryLocation-wrapper:hover {
    background-color: ${color.tapHighlight};
  }

  /* city */
  & time {
    min-width: var(--time-width);
  }

  & .kirk-itineraryLocation-chevron {
    display: flex;
    align-items: center;
  }

  & .kirk-itineraryLocation-city {
    padding-left: calc(${componentSizes.bulletSize} + ${space.m});
    flex: 1;
  }

  &.kirk-itineraryLocation--withTime .kirk-itineraryLocation-city {
    padding-left: calc((${componentSizes.bulletSize} / 2) + ${space.m});
  }

  &:not(.kirk-itineraryLocation--arrival) .kirk-itineraryLocation-city {
    padding-bottom: 0;
  }

  /* bullet */
  & .kirk-bullet {
    position: absolute;
    top: calc(${lineHeightAdjustment} + ${space.m} + ${gutterTopOffset});
    left: 0;
  }

  &.kirk-itineraryLocation--small .kirk-bullet {
    top: calc(
      ${lineHeightAdjustment} + ${space.m} + ${gutterTopOffset} +
        ((${componentSizes.bulletSize} - ${componentSizes.bulletSizeSmall}) / 2)
    );

    left: calc(
      (
          ${componentSizes.bulletSize} - ${componentSizes.bulletSizeSmall} -${componentSizes.roadWidth}
        ) / 2
    );
  }

  &.kirk-itineraryLocation--withTime .kirk-bullet {
    left: calc(var(--time-width) - (${componentSizes.bulletSize} / 2));
  }

  &.kirk-itineraryLocation--withTime.kirk-itineraryLocation--small .kirk-bullet {
    left: calc(var(--time-width) - (${componentSizes.bulletSizeSmall} / 2));
  }

  /* road */
  & .kirk-itineraryLocation-road {
    position: absolute;
    top: calc(
      ${componentSizes.bulletSize} + ${space.m} + ${lineHeightAdjustment} -
        (${componentSizes.bulletSize} - ${componentSizes.bulletSizeSmall})
    );
    left: calc((${componentSizes.bulletSize} - ${componentSizes.roadWidth}) / 2);
    width: ${componentSizes.roadWidth};
    height: calc(
      100% - (${space.m}) + ((${componentSizes.bulletSize} - ${componentSizes.bulletSizeSmall}) * 2)
    ); /* with overhead to "hide" behind smaller bullets */
    background-color: ${color.primaryText};
    border-radius: ${radius.s};
  }

  &.kirk-itineraryLocation--small .kirk-itineraryLocation-road {
    left: calc((${componentSizes.bulletSizeSmall} - ${componentSizes.roadWidth}) / 2);
  }

  &.kirk-itineraryLocation--withTime .kirk-itineraryLocation-road,
  &.kirk-itineraryLocation--withTime.kirk-itineraryLocation--small .kirk-itineraryLocation-road {
    left: calc(var(--time-width) - (${componentSizes.roadWidth} / 2));
  }

  &.kirk-itineraryLocation--withToAddon .kirk-itineraryLocation-road {
    background-color: ${color.fadedText};
    height: calc(100% + (${componentSizes.bulletSize} * 2));
  }
`

export { ItineraryLocationProps, computeKeyFromPlace } from './ItineraryLocation'
export default StyledItineraryLocation
