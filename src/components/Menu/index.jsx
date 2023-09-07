import { Container, Section } from './styles';

import { ItemMenu } from '../../components/ItemMenu';


export function Menu({title}) {
  return (
    <Container>
      <h1>{title}</h1>

      <Section>
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
      </Section>
      
    </Container>
  )
}