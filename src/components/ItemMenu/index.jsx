import { Container } from './styles';
import { Quantity } from '../Quantity'
import { ButtonAdd } from '../ButtonAdd'
import { MdFavoriteBorder } from 'react-icons/md'
import Gambe from '../../assets/Gambe_400.svg';

export function ItemMenu() {
  return (
    <Container>
      <div className='fav'>
        <MdFavoriteBorder />
      </div>
      
      <div className='card'>
        <img
          src={Gambe}
          alt="Gambe">
        </img>
        <h1>Spaguetti Gambe</h1>
        <p>Massa fresca com camarões e pesto.</p>
        <div className='money'>R$ 79,97</div>

        <div className='Quanty'>
          <Quantity />
          <ButtonAdd title="incluir" />
        </div>
      </div>
    </Container>
  )
}