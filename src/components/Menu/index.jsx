import { Container, Section } from './styles';
import { useState, useEffect } from "react";
import { ItemMenu } from '../../components/ItemMenu';
import { api } from '../../services/api'

export function Menu({ title, category }) {

  const [plates, setPlates] = useState([]);

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates?category=${category}`);
      setPlates(response.data);
    }

    fetchPlates();
  }, []);

  const filteredPlates = plates.filter(plate => plate.category === category);

  return (
    <Container>
      <h1>{title}</h1>
    
      <Section>
        {
          filteredPlates.map(plate => (
            <ItemMenu
              key={String(plate.plates_id)}
              data={plate}
            />
          ))
        }        

      </Section>

    </Container>
  )
}