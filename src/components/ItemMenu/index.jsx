import { Container } from './styles';
import { Quantity } from '../Quantity'
import { ButtonAdd } from '../ButtonAdd'
import { MdFavoriteBorder } from 'react-icons/md'
import photoPlaceholder from '../../assets/Gambe_400.svg';
import { api } from '../../services/api'


export function ItemMenu({ data, ...rest }) {

  const photoUrl = data.photo
    ? `${api.defaults.baseURL}/files/${data.photo}`
    : photoPlaceholder
  console.log(data)
  console.log(photoUrl)
  

  return (
    <Container {...rest}>
      <div className='fav'>
        <MdFavoriteBorder />
      </div>

      <div className='card'>
        <img
          src={photoUrl}
          alt={data.name}
        />
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div className='money'>{data.value}</div>

        <div className='Quanty'>
          <Quantity />
          <ButtonAdd title="incluir" />
        </div>
      </div>
    </Container>
  )
}