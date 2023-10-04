import { Container } from './styles'
import { useState } from 'react';


import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export function Quantity() {

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Container>
      <AiOutlineMinus onClick={decreaseQuantity} /> {String(quantity).padStart(2, '0')} <AiOutlinePlus onClick={increaseQuantity} />
    </Container>
  )
}
