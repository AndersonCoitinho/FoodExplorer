import { Container } from './styles';

import Fruit from '../../assets/fruit.svg';

export function RectangleFruit() {
  return (
    <Container>
      <img
          src={Fruit}
          alt="Frutas">
        </img>
    </Container>
  )
}