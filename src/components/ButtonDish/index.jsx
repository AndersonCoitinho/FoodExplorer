import { Container } from './styles';


export function ButtonDish({ title, ...rest }) {
  return (
    <Container
      type="button"
    > {title}
    </Container>
  )
}