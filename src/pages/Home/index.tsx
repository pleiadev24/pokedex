import * as S from './styles'

import Logo from '../../components/Logo'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
const Home = () => (
  <S.Wrapper>
    <Logo />
    <TextField placeholder="Digite o nome do pokemon" />
    <Button>Procurar</Button>
  </S.Wrapper>
)
export default Home
