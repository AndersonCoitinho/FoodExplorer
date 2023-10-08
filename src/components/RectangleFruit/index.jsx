import { Container } from './styles';
import Fruit from '../../assets/fruit.svg';


export function RectangleFruit() {
  return (
    <Container>
      <img
          src={Fruit}
          alt="Frutas">
      </img>
      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>

  )
}