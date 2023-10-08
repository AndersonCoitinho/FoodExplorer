import { Container } from './styles';
import { Quantity } from '../Quantity'
import { ButtonAdd } from '../ButtonAdd'
import { MdFavoriteBorder } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'
import { api } from '../../services/api'
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import photoPlaceholder from '../../assets/photoPlaceholder.jpg';

export function ItemMenu({ data, ...rest }) {
  const { user } = useAuth()
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const navigate = useNavigate();

  function editDish(plates_id) {
    navigate(`/editdish/${plates_id}`);
  }

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
      <div className='top'>
        {user.isAdmin === 1 ? (
          <div className='edit' onClick={() => editDish(data.plates_id)}>
            <FiEdit2 />
          </div>
        ) : (
          <div className={`fav ${isFavorite ? 'selected' : ''}`} onClick={toggleFavorite}>
            <MdFavoriteBorder />
          </div>
        )}
      </div>

      <div className='card'>
        <div className='image-container'>
          <img
            src={photoUrl}
            alt={data.name}
          />
        </div>
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