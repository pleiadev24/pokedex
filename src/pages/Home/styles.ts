import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from '../../components/Container'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
    > * {
      margin: 0 auto;
    }
    ${media.greaterThan('medium')`
      input {
        min-width: calc(${theme.grid.container} / 2);
      }
    `}
  `}
`
