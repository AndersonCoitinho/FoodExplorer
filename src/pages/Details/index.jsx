import { Container } from './styles';


import { Header } from '../../components/Header';
import { RectangleFruit } from '../../components/RectangleFruit';
import { Menu } from '../../components/Menu';


export function Details() {

  return (
    <Container>
      <Header />
      
      <RectangleFruit /> 
      <Menu /> 

    </Container>
  )
}