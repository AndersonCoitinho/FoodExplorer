import { Container, Section } from './styles';
import { useState, useEffect } from "react";
import { ItemMenu } from '../../components/ItemMenu';
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom';


export function Menu({ title, category, }) {

  const [plates, setPlates] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates?category=${category}`);
      setPlates(response.data);
    }

    fetchPlates();
  }, []);

  const filteredPlates = plates.filter(plate => plate.category === category);

  function handleDetails(plates_id, event) {
    const isButtonClicked = event.target.closest('.Quanty') || event.target.closest('.top');
    if (isButtonClicked) {
      return;
    }
    navigate(`/details/${plates_id}`);
  }

  
  

  return (
    <Container>
      <h1>{title}</h1>
      
      <Section>
        {
          filteredPlates.map(plate => (
            <ItemMenu
              key={String(plate.plates_id)}
              data={plate}
              onClick={(event) => handleDetails(plate.plates_id, event)}
            />
          ))
        }        

      </Section>

    </Container>
  )
}