import styled from 'styled-components'
import { color, space, componentSizes } from '_utils/branding'

import Itinerary from './Itinerary'

const distanceFromHeight = '48px'

const StyledItinerary = styled(Itinerary)`
  & {
    --time-width: calc(${componentSizes.timeWidth} + ${componentSizes.bulletSize});
    --left-smallBulletPosition: calc(
      (${componentSizes.bulletSize} - ${componentSizes.bulletSizeSmall}) / 2
    );
  }

  li {
    position: relative;
    list-style-type: none;
  }

  & .kirk-itinerary--highlightRoad .kirk-itineraryLocation-road {
    background-color: ${color.primaryText};
  }

  & .kirk-itineraryLocation-road {
    display: block;
    height: calc(100% - ${componentSizes.bulletSize});
    width: ${componentSizes.roadWidth};
    background-color: ${color.fadedText};
    margin: 0 auto;
  }

  & .kirk-itinerary--noTime .kirk-itinerary-addon {
    margin-left: 0;
  }

  /* addons */
  & .kirk-itinerary-addon {
    padding-left: ${space.l}; /* Adding the width of the step points to the regular spacing */
    height: ${distanceFromHeight};
    display: flex;
    padding-left: 0;
    margin-left: var(--time-width);
  }

  & .kirk-itinerary-addon .kirk-itineraryLocation-roadContainer {
    position: relative;
    top: ${space.s};
    margin-right: ${space.m};
  }

  & .kirk-itinerary-addon--to .kirk-itineraryLocation-label {
    padding-bottom: 0;
  }

  & .kirk-itinerary-addon--to .kirk-itineraryLocation-roadContainer {
    position: static;
  }

  & :not(.kirk-itinerary--noTime) .kirk-itinerary-addon .kirk-itineraryLocation-city {
    margin-left: calc(${space.m} + ${componentSizes.timeWidth});
  }

  /* road, only for -addon--from */
  & .kirk-itinerary-addon--from .kirk-itineraryLocation-road {
    background-color: ${color.fadedText};
  }

  /* isCollapsible */
  & .kirk-itineraryCollapsible {
    margin-left: calc(var(--time-width) + var(--left-smallBulletPosition));
  }

  & .kirk-itinerary--noTime .kirk-itineraryCollapsible {
    margin-left: var(--left-smallBulletPosition);
  }

  & .kirk-itineraryLocation-wrapper {
    padding: 0;
  }

  & .kirk-itineraryLocation-label {
    padding-bottom: ${space.l};
  }
`

export { ItineraryProps } from './Itinerary'
export default StyledItinerary
