import styled, { css } from 'styled-components'
import { slideIn, skeletonAnimation } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  width: 100%;
  // ${skeletonAnimation}

  /* &.fixed { */
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    ${slideIn}
  `}


  }
`

export const Item = styled.li`
  padding: 0 8px;
`
