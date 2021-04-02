import { Story, Meta } from '@storybook/react/types-6-0'
import { Twitter } from '@styled-icons/remix-line/Twitter'
import { Refresh } from '@styled-icons/remix-line/Refresh'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Try again'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Try again',
  icon: <Refresh />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  children: 'Share on Twitter',
  icon: <Twitter />,
  as: 'a',
  href: '/link'
}
