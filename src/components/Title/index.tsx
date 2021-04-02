import * as S from './styles'

export type TitleProps = {
  children: React.ReactNode
}

const Title = ({ children = 'Get a Pokémon!' }: TitleProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default Title
