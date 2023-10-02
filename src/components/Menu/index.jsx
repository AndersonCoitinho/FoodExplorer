import { Container, Section } from './styles';
import { useState, useEffect } from "react";
import { ItemMenu } from '../../components/ItemMenu';
import { api } from '../../services/api'

export function Menu({ title }) {

  const [plates, setPlates] = useState([]);

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates`);
      setPlates(response.data);
    }

    fetchPlates();
  }, []);

  return (
    <Container>
      <h1>{title}</h1>
    
      <Section>
        {
          plates.map(plate => (
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