import { Container } from './styles';


export function ButtonRemove({ title, onClick }) {
  return (
    <Container 
      type='button'
      onClick={onClick}
    > {title}
    </Container>
  )
}