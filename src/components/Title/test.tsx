import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Title from '.'

describe('<Title />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Title>Get a Pokémon!</Title>)

    expect(
      screen.getByRole('heading', { name: /get a pokémon!/i })
    ).toHaveStyleRule('font-family', 'Pokemon')
  })
})
