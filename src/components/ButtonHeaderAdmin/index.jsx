import { Container } from './styles';


export function ButtonHeaderAdmin({ title }) {
  return (
    <Container to="/newdish"
      type='button'
    > {title}
    </Container>
  )
}