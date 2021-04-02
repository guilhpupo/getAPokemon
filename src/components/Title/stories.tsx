import { Story, Meta } from '@storybook/react/types-6-0'
import Title, { TitleProps } from '.'

export default {
  title: 'Title',
  component: Title,
  args: {
    children: 'Get a Pokémon!'
  }
} as Meta

export const Default: Story<TitleProps> = (args) => <Title {...args} />
