import * as S from './styles'

type Props = {
  title: string
  description: string
}

export const Main = ({
  title = 'React Hard',
  description = 'TypeScript, ReactJS, NextJS, e Styled Components'
}: Props) => (
  <S.Wrapper>
    <S.Logo src="#" alt="Image de um átomo e React Avançado escrito ao lado." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="#"
      alt="Um desenvolvedor de frente para um tela com código."
    />
  </S.Wrapper>
)
