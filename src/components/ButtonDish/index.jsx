import { Container } from './styles';


export function ButtonDish({ title, onClick, ...rest }) {
  return (
    <Container
      type='button'
      onClick={onClick}
    > {title}
    </Container>
  )
}