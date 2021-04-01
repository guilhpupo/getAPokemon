import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Pokeball from '.'

describe('<Pokeball />', () => {
  it('should render the svg image', () => {
    renderWithTheme(<Pokeball />)

    expect(screen.getByRole('img', { name: /pokéball/i })).toBeInTheDocument()
  })
})
