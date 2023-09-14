import { Container } from './styles';
import { PiReceiptLight } from 'react-icons/pi'


export function ButtonHeader({ title }) {
  return (
    <Container to="/newdish"
    type='button' 
    >
      <PiReceiptLight /> {title} 
    </Container>
  )
}