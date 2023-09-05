import { Container } from './styles';

import { MdOutlineFavoriteBorder } from 'react-icons/md'

import Gambe from '../../assets/Gambe_400.svg';

export function ItemMenu() {
  return (
    <Container>
      {MdOutlineFavoriteBorder}
       <img
          src={Gambe}
          alt="Gambe">
        </img>
        <h1>Spaguetti Gambe</h1>
        <p>Massa fresca com camarões e pesto.</p>
        <div>R$ 79,97</div> 
    </Container>
  )
}