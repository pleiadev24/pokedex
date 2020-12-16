import React from 'react'
import Home from './'
import { renderWithTheme } from '../../utils/tests/helpers'

test('render home correctly', () => {
  const { container } = renderWithTheme(<Home />)
  expect(container.firstChild).toBeInTheDocument()
})
