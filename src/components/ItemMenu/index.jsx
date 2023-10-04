import { Container } from './styles';
import { Quantity } from '../Quantity'
import { ButtonAdd } from '../ButtonAdd'
import { MdFavoriteBorder } from 'react-icons/md'
import photoPlaceholder from '../../assets/Gambe_400.svg';
import { api } from '../../services/api'
import { useState } from 'react';


export function ItemMenu({ data, ...rest }) {

  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const photoUrl = data.photo
    ? `${api.defaults.baseURL}/files/${data.photo}`
    : photoPlaceholder

  function formatCurrency(value) {
    // Remove tudo o que não for dígito
    const numericValue = value.replace(/\D/g, '');
    // Formata para "R$ 00,00"
    const formattedValue = (numericValue / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedValue;
  }
  const valueFormat = formatCurrency(data.value);


  return (
    <Container {...rest}>
      <div className={`fav ${isFavorite ? 'selected' : ''}`} onClick={toggleFavorite}>
        <MdFavoriteBorder />
      </div>

      <div className='card'>
        <img
          src={photoUrl}
          alt={data.name}
        />
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div className='money'>{valueFormat}</div>

        <div className='Quanty'>
          <Quantity />
          <ButtonAdd title="incluir" />
        </div>
      </div>
    </Container>
  )
}