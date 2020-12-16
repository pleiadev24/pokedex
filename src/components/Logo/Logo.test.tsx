import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Home from './'

describe('<Container />', () => {
  it('should render the logo', () => {
    renderWithTheme(<Home />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
