import { render, screen } from '@testing-library/react'

import Pokemon from '.'

describe('<Pokemon />', () => {
  it('should render a pokemon image', () => {
    render(
      <Pokemon
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        title="bulbasaur"
      />
    )

    expect(screen.getByRole('img', { name: /bulbasaur/i })).toBeInTheDocument()
  })
})
