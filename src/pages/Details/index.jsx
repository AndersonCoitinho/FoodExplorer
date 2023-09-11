import { Container, Dish, Description } from './styles';
import { AiOutlineLeft } from 'react-icons/ai'
import Gambe from '../../assets/Gambe_400.svg';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Ingredient } from '../../components/Ingredient'
import { ButtonDish } from '../../components/ButtonDish'

import { Section } from '../../components/Section'
import { Quantity } from '../../components/Quantity'

export function Details({ ...rest }) {
    return (
        <Container {...rest}>
            <Header />
            <a href="">
                <AiOutlineLeft />
                voltar
            </a>
            <Dish>
                <img
                    src={Gambe}
                    alt="Gambe">
                </img>
                <Description>
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agrídoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                    <Section>
                        <Ingredient title="arroz" />
                        <Ingredient title="cebola" />
                        <Ingredient title="pão naan" />
                        <Ingredient title="pepino" />
                    </Section>
                    <div className='Quantity'>
                        <Quantity />
                        <ButtonDish title="incluir - R$ 25,00" />
                    </div>
                </Description>

            </Dish>

            <Footer />
        </Container>
    )
}