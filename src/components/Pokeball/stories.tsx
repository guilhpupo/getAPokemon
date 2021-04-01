import { Story, Meta } from '@storybook/react/types-6-0'
import Pokeball from '.'

export default {
  title: 'Pokeball',
  component: Pokeball
} as Meta

export const Default: Story = () => <Pokeball />
