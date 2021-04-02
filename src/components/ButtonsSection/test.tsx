import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import ButtonsSection from '.'

describe('<ButtonsSection />', () => {
  it('should render a button to return to homepage', () => {
    renderWithTheme(<ButtonsSection />)

    expect(
      screen.getByRole('button', { name: /try again/i })
    ).toBeInTheDocument()
  })
})
