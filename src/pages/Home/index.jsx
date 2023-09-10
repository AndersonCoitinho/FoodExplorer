import { Container } from './styles';


import { Header } from '../../components/Header';
import { RectangleFruit } from '../../components/RectangleFruit';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';


export function Home() {

  return (
    <Container>
      <Header />
      <RectangleFruit />
      <Menu title="Refeições"/>
      <Menu title="Sobremesas"/>
      <Menu title="Bebidas"/>
      <Footer />

    </Container>
  )
}