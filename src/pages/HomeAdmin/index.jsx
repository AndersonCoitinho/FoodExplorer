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
      <Menu title="Refeições"/>
      <Menu title="Sobremesas"/>
      <Menu title="Bebidas"/>
      <Footer />

    </Container>
  )
}