import styled from 'styled-components'

import { baseSpacing, containerWidth, pxToRem } from '@themes'

export const StyledDiv = styled.div`
  padding-left: ${pxToRem(baseSpacing)};
  padding-right: ${pxToRem(baseSpacing)};
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  max-width: ${containerWidth}px;
`