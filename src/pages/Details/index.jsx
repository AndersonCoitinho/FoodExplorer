import { Container, Dish, Description, Inte } from './styles';
import { AiOutlineLeft } from 'react-icons/ai'
import Gambe from '../../assets/Gambe_400.svg';

import { Header } from '../../components/Header'
import { Ingredients } from '../../components/Ingredients'
import { Footer } from '../../components/Footer'

export function Details({ data, ...rest }) {
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

                    <Inte>
                        <Ingredients data={{
                            ingredients: [
                                { id: '1', name: 'foi' },
                                { id: '2', name: 'fui' },
                                { id: '3', name: 'oi' },
                            ]
                        }}
                        />
                    </Inte>
                </Description>
            </Dish>

            <Footer />
        </Container>
    )
}