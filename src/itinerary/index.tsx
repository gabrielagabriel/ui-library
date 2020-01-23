import styled from 'styled-components'
import { color, radius, space, componentSizes } from '_utils/branding'

import Itinerary from './Itinerary'

const distanceFromHeight = '40px'
const gutterTopOffset = '1px'
const lineHeightAdjustment = '4px'

const StyledItinerary = styled(Itinerary)`
  & {
    --time-width: calc(${componentSizes.timeWidth} + ${componentSizes.bulletSize});
  }

  li {
    position: relative;
    list-style-type: none;
  }

  /* bullet */
  & .kirk-itinerary-addon .kirk-bullet {
    position: absolute;
    top: calc(-1 * ${gutterTopOffset});
    left: calc(var(--time-width) - (${componentSizes.bulletSize} / 2));
  }

  & .kirk-itinerary-addon--to .kirk-bullet {
    top: auto;
    bottom: calc(-1 * ${gutterTopOffset});
  }

  & .kirk-itinerary--noTime .kirk-itinerary-addon .kirk-bullet {
    left: 0;
  }

  /* addons */
  & .kirk-itinerary-addon {
    padding-left: ${space.l}; /* Adding the width of the step points to the regular spacing */
    flex: 1;
    height: ${distanceFromHeight};
  }

  & :not(.kirk-itinerary--noTime) .kirk-itinerary-addon .kirk-itineraryLocation-city {
    margin-left: calc(${space.m} + ${componentSizes.timeWidth});
  }

  & .kirk-itinerary-addon .kirk-itineraryLocation-city .kirk-text {
    position: relative;
    top: calc(-1 * ${lineHeightAdjustment});
  }

  & .kirk-itinerary-addon--to .kirk-itineraryLocation-city .kirk-text {
    top: calc(${distanceFromHeight} - ${componentSizes.bulletSize} - 2px);
  }

  /* road, only for -addon--from */
  & .kirk-itinerary-addon--from .kirk-itineraryLocation-road {
    position: absolute;
    top: calc(${componentSizes.bulletSize} - ${lineHeightAdjustment});
    left: calc(var(--time-width) - (${componentSizes.roadWidth} / 2));
    width: ${componentSizes.roadWidth};
    height: calc(100% + ${lineHeightAdjustment} + (${componentSizes.bulletSize} / 2));
    background-color: ${color.fadedText};
    border-radius: ${radius.s};
  }

  & .kirk-itinerary--noTime .kirk-itinerary-addon--from .kirk-itineraryLocation-road {
    left: calc((${componentSizes.bulletSize} - ${componentSizes.roadWidth}) / 2);
  }

  /* isCollapsible */
  & .kirk-itineraryCollapsible {
    margin-left: calc(var(--time-width) - (${componentSizes.bulletSizeSmall} / 2));
  }

  & .kirk-itinerary--noTime .kirk-itineraryCollapsible {
    margin-left: calc((${componentSizes.bulletSize} - ${componentSizes.bulletSizeSmall}) / 2);
  }
`

export { ItineraryProps } from './Itinerary'
export default StyledItinerary
