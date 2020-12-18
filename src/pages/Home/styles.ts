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
    flex-direction: column;
    text-align: center;
    margin-top: ${theme.spacings.small};
    > * {
      margin-bottom: ${theme.spacings.small};
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

export const ContentMessage = styled.div`
  grid-column: 1/-1;
  grid-row: 3;
  text-align: center;
`

export const SearchGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    button {
      margin-left: ${theme.spacings.xxsmall};
      ${media.greaterThan('medium')`
        margin-left: ${theme.spacings.xsmall};
      `}
    }
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary};
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 0.5rem ${theme.colors.secondary};
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.xsmall};
    svg {
      fill: ${theme.colors.red};
    }
    img,
    svg {
      margin: 0 auto;
    }
  `}
`
