import * as S from './styles'

export type PokemonProps = {
  img: string
  title: string
}
const Pokemon = ({ img, title }: PokemonProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
  </S.Wrapper>
)

export default Pokemon
