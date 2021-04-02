import Link from 'next/link'
import * as S from './styles'

const Pokeball = () => (
  <S.Wrapper>
    <Link href="/result">
      <S.Image src="img/pokeball.svg" aria-label="Pokéball" />
    </Link>
  </S.Wrapper>
)

export default Pokeball
