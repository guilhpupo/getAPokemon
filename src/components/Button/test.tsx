import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import { Twitter } from '@styled-icons/remix-line/Twitter'

import Button from '.'

describe('<Button />', () => {
  it('should render a withIcon version button when passed', () => {
    renderWithTheme(
      <Button icon={<Twitter data-testid="icon" />}>Test Button</Button>
    )
    expect(screen.getByText(/Test Button/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('should render a button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Link button
      </Button>
    )
    expect(screen.getByRole('link', { name: /link button/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
