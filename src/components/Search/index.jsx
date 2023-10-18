import { Container } from './style'

export function Search({ icon: Icon, ...rest}) {
  return (
    <Container>
      {<Icon /> && <Icon size={38} /> } {/*se tiver icone ele exibe, se não, não é exibido*/}
      <input {...rest} />
    </Container>
  )
}