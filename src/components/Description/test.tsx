import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Description from '.'

describe('<Description />', () => {
  it('should render the description', () => {
    renderWithTheme(<Description />)

    expect(
      screen.getByRole('heading', {
        name: /Let a Pokémon choose you this time!/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Click on the Poké ball to get your Pokémon./i
      })
    ).toBeInTheDocument()
  })
})
