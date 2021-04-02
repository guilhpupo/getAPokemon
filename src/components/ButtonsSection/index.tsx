import Link from 'next/link'
import * as S from './styles'
import Button from 'components/Button'
import { Refresh } from '@styled-icons/remix-line/Refresh'

const ButtonsSection = () => (
  <S.Wrapper>
    <Link href="/">
      <Button icon={<Refresh />}>Try again!</Button>
    </Link>
  </S.Wrapper>
)

export default ButtonsSection
