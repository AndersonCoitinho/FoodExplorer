import { Container, Section } from './styles';

import { ItemMenu } from '../../components/ItemMenu';


export function Menu() {
  return (
    <Container>
      <h1>Refeições</h1>

      <Section>
        <ItemMenu />
        <ItemMenu />
        <ItemMenu />
      </Section>
      
    </Container>
  )
}