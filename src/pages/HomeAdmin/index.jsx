import { Container } from './styles';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { RectangleFruit } from '../../components/RectangleFruit';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';


export function HomeAdmin() {

  return (
    <Container>
      <HeaderAdmin />
      <RectangleFruit />
      <Menu title="Refeições" category="Refeicao"/>
      <Menu title="Sobremesas" category="Sobremesa"/>
      <Menu title="Bebidas" category="Bebida"/>
      <Footer />

    </Container>
  )
}