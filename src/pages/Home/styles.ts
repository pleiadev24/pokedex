import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from '../../components/Container'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
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

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    > * {
      margin: ${theme.spacings.medium};
    }
    img {
      max-width: 13rem;
    }
    svg[aria-label='favorite'] {
      fill: ${theme.colors.red};
      cursor: pointer;
    }
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary};
    padding: ${theme.spacings.medium};
  `}
`
