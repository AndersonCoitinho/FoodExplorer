import { Container } from './styles';

import { Button } from '../../components/Button';


export function Details() {

  return (
    <Container>
      <h1>Hello</h1>

      <Button title="Um"/>
      <Button title="dois" loading/>
      <Button title="oito"/>
    </Container>
  )
}