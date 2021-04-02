import { Story, Meta } from '@storybook/react/types-6-0'
import Pokemon, { PokemonProps } from '.'

export default {
  title: 'Pokemon',
  component: Pokemon,
  args: {
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    title: 'bulbasaur'
  }
} as Meta

export const Default: Story<PokemonProps> = (args) => <Pokemon {...args} />
